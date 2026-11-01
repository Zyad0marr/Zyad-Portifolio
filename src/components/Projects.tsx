import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ExternalLink, 
  X, 
  FileText, 
  CheckSquare, 
  Bug, 
  ClipboardCheck,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
  RotateCcw,
  Eye,
  FileSpreadsheet,
  AlertTriangle,
  Lock,
  Layers,
  Search
} from 'lucide-react';
import { PROJECTS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { QAProjectItem, ProjectDocumentImage, TestCaseRecord, BugReportRecord } from '../types';

interface DocumentLightboxProps {
  image: ProjectDocumentImage;
  onClose: () => void;
  onNavigateNext?: () => void;
  onNavigatePrev?: () => void;
  currentIndex?: number;
  totalImages?: number;
}

const DocumentLightbox: React.FC<DocumentLightboxProps> = ({
  image,
  onClose,
  onNavigateNext,
  onNavigatePrev,
  currentIndex,
  totalImages
}) => {
  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const posStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Reset zoom & pan when image changes
  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [image.id]);

  // Handle ESC and keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === '+' || e.key === '=') setScale((s) => Math.min(3, Number((s + 0.25).toFixed(2))));
      if (e.key === '-' || e.key === '_') setScale((s) => Math.max(0.75, Number((s - 0.25).toFixed(2))));
      if (e.key === '0') {
        setScale(1);
        setPosition({ x: 0, y: 0 });
      }
      if (e.key === 'ArrowRight' && onNavigateNext) onNavigateNext();
      if (e.key === 'ArrowLeft' && onNavigatePrev) onNavigatePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigateNext, onNavigatePrev]);

  const handleZoomIn = () => setScale((s) => Math.min(3, Number((s + 0.25).toFixed(2))));
  const handleZoomOut = () => setScale((s) => Math.max(0.75, Number((s - 0.25).toFixed(2))));
  const handleResetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    posStartRef.current = { ...position };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setPosition({
      x: posStartRef.current.x + dx,
      y: posStartRef.current.y + dy
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
    if (e.deltaY < 0) {
      setScale((s) => Math.min(3, Number((s + 0.15).toFixed(2))));
    } else {
      setScale((s) => Math.max(0.75, Number((s - 0.15).toFixed(2))));
    }
  };

  const handleDoubleClick = () => {
    if (scale === 1) {
      setScale(1.75);
    } else {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  return (
    <div 
      className="fixed inset-0 z-60 flex flex-col bg-[#0b0f19]/95 text-white backdrop-blur-md select-none"
      role="dialog"
      aria-modal="true"
      aria-label={`Document Viewer: ${image.title}`}
    >
      {/* Lightbox Top Control Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-[#0f1422]/90 shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30">
              {image.section}
            </span>
            <span className="hidden sm:inline-block text-xs text-slate-400 font-mono">
              {image.sheetName}
            </span>
          </div>
          <span className="text-white/30 hidden sm:inline">•</span>
          <h4 className="text-xs sm:text-sm font-semibold truncate text-slate-200">
            {image.title}
          </h4>
        </div>

        {/* Zoom & Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mr-2">
            <Lock className="w-3 h-3" />
            <span>Static Testing Document • Read-Only</span>
          </div>

          <div className="flex items-center bg-white/10 rounded-lg p-0.5 border border-white/10">
            <button
              type="button"
              onClick={handleZoomOut}
              disabled={scale <= 0.75}
              className="p-1.5 hover:bg-white/10 rounded text-slate-200 disabled:opacity-40 transition-colors"
              title="Zoom Out (-)"
              aria-label="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleResetZoom}
              className="px-2 py-1 text-xs font-mono font-medium hover:bg-white/10 rounded text-slate-200 transition-colors"
              title="Reset Zoom (Fit)"
              aria-label="Reset zoom"
            >
              {Math.round(scale * 100)}%
            </button>
            <button
              type="button"
              onClick={handleZoomIn}
              disabled={scale >= 3}
              className="p-1.5 hover:bg-white/10 rounded text-slate-200 disabled:opacity-40 transition-colors"
              title="Zoom In (+)"
              aria-label="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleResetZoom}
              className="p-1.5 hover:bg-white/10 rounded text-slate-200 transition-colors ml-0.5"
              title="Reset to 100%"
              aria-label="Reset zoom to fit"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-rose-500/80 text-white transition-colors cursor-pointer ml-1"
            title="Close viewer (Esc)"
            aria-label="Close document viewer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Image Viewport Canvas */}
      <div 
        className="flex-1 relative overflow-hidden flex items-center justify-center p-4 sm:p-8 cursor-default"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        style={{
          cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
        }}
      >
        <div 
          className="transition-transform duration-75 ease-out max-w-full max-h-full flex items-center justify-center pointer-events-none"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: 'center center'
          }}
        >
          <img
            src={image.src}
            alt={`${image.title} - ${image.sheetName}`}
            onDoubleClick={handleDoubleClick}
            draggable={false}
            className="max-w-[94vw] max-h-[82vh] object-contain rounded-lg shadow-2xl border border-white/15 bg-white pointer-events-auto"
          />
        </div>

        {/* Defect Highlight Banner if applicable */}
        {image.highlightDefect && (
          <div className="absolute top-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md p-3 rounded-xl bg-[#1e1b2e]/90 border border-rose-500/40 text-xs shadow-xl backdrop-blur-sm pointer-events-auto">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
              <div>
                <p className="font-bold text-rose-300">Documented Defect Identified</p>
                <p className="text-slate-300 text-[11px] mt-0.5 leading-relaxed">
                  {image.highlightDefect}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* On-screen navigation between sheets if available */}
        {totalImages && totalImages > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 rounded-full bg-[#0f172a]/80 border border-white/15 backdrop-blur-sm text-xs font-medium text-slate-300">
            {onNavigatePrev && (
              <button
                type="button"
                onClick={onNavigatePrev}
                className="hover:text-white px-2 py-0.5 rounded transition-colors"
              >
                ← Previous Sheet
              </button>
            )}
            <span className="text-slate-500 font-mono">
              {(currentIndex ?? 0) + 1} / {totalImages}
            </span>
            {onNavigateNext && (
              <button
                type="button"
                onClick={onNavigateNext}
                className="hover:text-white px-2 py-0.5 rounded transition-colors"
              >
                Next Sheet →
              </button>
            )}
          </div>
        )}
      </div>

      {/* Lightbox Bottom Details Bar */}
      <div className="px-4 sm:px-6 py-2.5 border-t border-white/10 bg-[#0f1422]/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400 shrink-0">
        <p className="truncate">
          <strong className="text-slate-200">Summary: </strong>
          {image.caption}
        </p>
        <span className="text-[11px] text-slate-500 shrink-0">
          Tip: Double-click to zoom • Scroll to adjust magnification • Drag to pan
        </span>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<QAProjectItem | null>(null);
  const [activeTab, setActiveTab] = useState<'testCases' | 'bugReports' | 'overview'>('testCases');
  const [lightboxImage, setLightboxImage] = useState<ProjectDocumentImage | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Handle ESC key and scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxImage) {
          setLightboxImage(null);
        } else if (selectedProject) {
          setSelectedProject(null);
        }
      }
    };

    if (selectedProject || lightboxImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, lightboxImage]);

  const handleOpenModal = (project: QAProjectItem) => {
    setSelectedProject(project);
    setActiveTab('testCases');
    setSearchTerm('');
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setLightboxImage(null);
    setSearchTerm('');
  };

  const docImages = selectedProject?.documentationImages || [];

  const currentLightboxIndex = lightboxImage 
    ? docImages.findIndex((d) => d.id === lightboxImage.id) 
    : -1;

  const handleNavigateNextDoc = () => {
    if (currentLightboxIndex >= 0 && currentLightboxIndex < docImages.length - 1) {
      setLightboxImage(docImages[currentLightboxIndex + 1]);
    } else if (currentLightboxIndex === docImages.length - 1) {
      setLightboxImage(docImages[0]);
    }
  };

  const handleNavigatePrevDoc = () => {
    if (currentLightboxIndex > 0) {
      setLightboxImage(docImages[currentLightboxIndex - 1]);
    } else if (currentLightboxIndex === 0) {
      setLightboxImage(docImages[docImages.length - 1]);
    }
  };

  // Filter test cases based on search term
  const filteredTestCases = (selectedProject?.testCases || []).filter((tc) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      tc.testId.toLowerCase().includes(term) ||
      tc.testName.toLowerCase().includes(term) ||
      tc.testDescription.toLowerCase().includes(term)
    );
  });

  return (
    <section 
      id="projects" 
      className="py-20 md:py-28 border-t border-[#e8e6df] dark:border-[#1e293b] bg-white dark:bg-[#0f1422] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="text-xs font-bold tracking-widest text-[#2563eb] dark:text-[#3b82f6] uppercase mb-2"
          >
            {PERSONAL_INFO.projectsBadge || "QA Case Studies"}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
            className="text-3xl md:text-4xl font-extrabold text-[#0f172a] dark:text-[#f8fafc] tracking-tight mb-3"
          >
            {PERSONAL_INFO.projectsTitle || "Projects"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.12, ease: 'easeOut' }}
            className="text-sm md:text-base text-[#64748b] dark:text-[#94a3b8] leading-relaxed"
          >
            {PERSONAL_INFO.projectsText}
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
              className="p-6 rounded-2xl bg-[#faf9f6] border border-[#e5e3dc] dark:bg-[#131b2e] dark:border-[#1e293b] shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-all duration-200 hover:border-[#cbd5e1] dark:hover:border-[#334155]"
            >
              <div>
                {/* Top Row: Category Badge & Project Index */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#2563eb]/10 text-[#2563eb] dark:bg-[#3b82f6]/15 dark:text-[#60a5fa] border border-[#2563eb]/20 dark:border-[#3b82f6]/30">
                    <CheckCircle2 className="w-3 h-3" />
                    {project.category}
                  </span>
                  <span className="text-[11px] text-[#64748b] dark:text-[#94a3b8] font-medium tracking-wide">
                    Case Study 0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-[#0f172a] dark:text-[#f8fafc] tracking-tight mb-2.5">
                  {project.title}
                </h3>

                {/* Subtitle / Type */}
                <p className="text-xs font-semibold text-[#64748b] dark:text-[#94a3b8] uppercase tracking-wider mb-3">
                  {project.type}
                </p>

                {/* Short Description */}
                <p className="text-sm text-[#475569] dark:text-[#cbd5e1] leading-relaxed mb-5">
                  {project.shortDescription}
                </p>
              </div>

              <div>
                {/* Deliverables Tags */}
                <div className="mb-5 pt-4 border-t border-[#eeece6] dark:border-[#1e293b]">
                  <p className="text-[11px] font-semibold text-[#64748b] dark:text-[#94a3b8] uppercase tracking-wider mb-2">
                    Deliverables
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.deliverableTags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-white dark:bg-[#1a233a] text-[#334155] dark:text-[#cbd5e1] border border-[#e2e8f0] dark:border-[#26334a]"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.documentationImages && project.documentationImages.length > 0 && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-400 border border-emerald-500/20">
                        <FileSpreadsheet className="w-3 h-3" />
                        Original Spreadsheets ({project.documentationImages.length})
                      </span>
                    )}
                  </div>
                </div>

                {/* View Project Button */}
                <button
                  type="button"
                  onClick={() => handleOpenModal(project)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#0f172a] hover:bg-[#1e293b] dark:bg-[#f8fafc] dark:text-[#0f172a] dark:hover:bg-slate-200 transition-colors duration-200 shadow-xs cursor-pointer group"
                  aria-label={`View details for ${project.title}`}
                >
                  <span>View Project</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Case Study Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-[#0f172a]/65 dark:bg-black/80 backdrop-blur-xs cursor-pointer"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-5xl max-h-[94vh] bg-white dark:bg-[#111827] rounded-2xl border border-[#e2e8f0] dark:border-[#1f293d] shadow-2xl flex flex-col overflow-hidden z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-4 sm:p-6 border-b border-[#e5e3dc] dark:border-[#1e293b] flex items-start justify-between gap-4 bg-[#faf9f6]/95 dark:bg-[#131b2e]/95">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#2563eb]/10 text-[#2563eb] dark:bg-[#3b82f6]/15 dark:text-[#60a5fa] border border-[#2563eb]/20 dark:border-[#3b82f6]/30">
                      <CheckCircle2 className="w-3 h-3" />
                      {selectedProject.category}
                    </span>
                    <span className="text-xs text-[#64748b] dark:text-[#94a3b8] font-medium">
                      {selectedProject.type}
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <Lock className="w-2.5 h-2.5" /> Read-Only
                    </span>
                  </div>
                  <h3 
                    id="modal-project-title" 
                    className="text-lg sm:text-2xl font-bold text-[#0f172a] dark:text-[#f8fafc] tracking-tight truncate"
                  >
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="p-1.5 rounded-lg text-[#64748b] hover:text-[#0f172a] dark:text-[#94a3b8] dark:hover:text-[#f8fafc] hover:bg-[#e2e8f0] dark:hover:bg-[#1e293b] transition-colors cursor-pointer shrink-0"
                  aria-label="Close project modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Tabs Organized strictly into Test Cases and Bug Reports */}
              <div className="px-4 sm:px-6 pt-3 border-b border-[#e5e3dc] dark:border-[#1e293b] flex gap-2 sm:gap-4 overflow-x-auto text-xs font-semibold bg-white dark:bg-[#111827] no-scrollbar">
                <button
                  type="button"
                  onClick={() => setActiveTab('testCases')}
                  className={`pb-2.5 px-2 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                    activeTab === 'testCases'
                      ? 'border-[#2563eb] text-[#2563eb] dark:border-[#3b82f6] dark:text-[#60a5fa]'
                      : 'border-transparent text-[#64748b] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-[#f8fafc]'
                  }`}
                >
                  <CheckSquare className="w-4 h-4" />
                  <span>Test Cases</span>
                  <span className={`px-1.5 py-0.2 rounded text-[10px] ${
                    activeTab === 'testCases' 
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300' 
                      : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                  }`}>
                    {selectedProject.testCases.length}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('bugReports')}
                  className={`pb-2.5 px-2 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                    activeTab === 'bugReports'
                      ? 'border-[#2563eb] text-[#2563eb] dark:border-[#3b82f6] dark:text-[#60a5fa]'
                      : 'border-transparent text-[#64748b] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-[#f8fafc]'
                  }`}
                >
                  <Bug className="w-4 h-4 text-rose-500" />
                  <span>Bug Reports</span>
                  <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                    activeTab === 'bugReports' 
                      ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300' 
                      : 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400'
                  }`}>
                    {selectedProject.bugReports.length} Defect
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('overview')}
                  className={`pb-2.5 px-2 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                    activeTab === 'overview'
                      ? 'border-[#2563eb] text-[#2563eb] dark:border-[#3b82f6] dark:text-[#60a5fa]'
                      : 'border-transparent text-[#64748b] dark:text-[#94a3b8] hover:text-[#0f172a] dark:hover:text-[#f8fafc]'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>Project Overview</span>
                </button>
              </div>

              {/* Scrollable Modal Content */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-sm text-[#334155] dark:text-[#cbd5e1]">
                
                {/* ============================================================== */}
                {/* SECTION 1: TEST CASES                                          */}
                {/* ============================================================== */}
                {activeTab === 'testCases' && (
                  <div className="space-y-6">
                    {/* Header Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#e5e3dc] dark:border-[#1e293b] pb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-bold text-[#2563eb] dark:text-[#3b82f6] uppercase tracking-wider">
                            Section 1 • Test Execution
                          </span>
                          <span className="text-xs text-[#64748b] dark:text-[#94a3b8]">•</span>
                          <span className="text-xs text-[#64748b] dark:text-[#94a3b8]">
                            Original Test Matrices & Transcribed Records
                          </span>
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-[#0f172a] dark:text-[#f8fafc]">
                          Test Cases Documentation
                        </h4>
                      </div>

                      {/* Read Only Indicator */}
                      <div className="flex items-center gap-2 text-xs text-[#64748b] dark:text-[#94a3b8]">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#f1f5f9] dark:bg-[#1e293b] text-[#475569] dark:text-[#cbd5e1] font-mono text-[11px]">
                          <Lock className="w-3 h-3 text-emerald-500" />
                          Read-Only View
                        </span>
                      </div>
                    </div>

                    {/* Part A: Original Document Screenshots (Click to Zoom) */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="text-xs font-bold text-[#0f172a] dark:text-[#f8fafc] uppercase tracking-wider flex items-center gap-2">
                          <FileSpreadsheet className="w-4 h-4 text-[#2563eb] dark:text-[#3b82f6]" />
                          Original Spreadsheet Captures (Click to Zoom & Pan)
                        </h5>
                        <span className="text-[11px] text-[#64748b] dark:text-[#94a3b8]">
                          2 Spreadsheets
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {docImages.filter((d) => d.section === 'Test Cases').map((doc) => (
                          <div
                            key={doc.id}
                            className="rounded-xl border border-[#e2e8f0] dark:border-[#1e293b] bg-[#faf9f6] dark:bg-[#131b2e] overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#2563eb]/40 transition-all duration-200"
                          >
                            <div className="px-3.5 py-2.5 bg-white dark:bg-[#0f1422] border-b border-[#e2e8f0] dark:border-[#1e293b] flex items-center justify-between gap-2">
                              <span className="font-mono text-xs font-semibold text-[#0f172a] dark:text-[#f8fafc] truncate">
                                {doc.sheetName}
                              </span>
                              <span className="text-[10px] font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-900/40 shrink-0">
                                Zoomable
                              </span>
                            </div>

                            {/* Image Preview Container (Clickable for Zoom) */}
                            <div 
                              onClick={() => setLightboxImage(doc)}
                              className="relative group cursor-pointer overflow-hidden bg-slate-100 dark:bg-slate-900 aspect-16/9 flex items-center justify-center p-2"
                              role="button"
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') setLightboxImage(doc);
                              }}
                              aria-label={`Open zoom view for ${doc.sheetName}`}
                            >
                              <img
                                src={doc.src}
                                alt={doc.title}
                                className="w-full h-full object-contain rounded transition-transform duration-200 group-hover:scale-[1.02]"
                              />
                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-[#0f172a]/40 dark:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-xs text-xs font-semibold shadow-lg">
                                  <ZoomIn className="w-4 h-4 text-blue-400" />
                                  <span>Click to Zoom & Inspect</span>
                                </div>
                              </div>
                            </div>

                            <div className="p-3.5 flex flex-col justify-between flex-1">
                              <div>
                                <h6 className="font-bold text-xs text-[#0f172a] dark:text-[#f8fafc] mb-1">
                                  {doc.title}
                                </h6>
                                <p className="text-[11px] text-[#64748b] dark:text-[#94a3b8] leading-relaxed mb-3">
                                  {doc.caption}
                                </p>
                              </div>

                              <button
                                type="button"
                                onClick={() => setLightboxImage(doc)}
                                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-[#1a233a] hover:bg-[#f1f5f9] dark:hover:bg-[#26334a] text-[#0f172a] dark:text-[#f8fafc] border border-[#cbd5e1] dark:border-[#334155] transition-colors cursor-pointer"
                              >
                                <Maximize2 className="w-3.5 h-3.5" />
                                <span>Inspect Full Document</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Part B: Transcribed Test Cases Table / Details (Word-for-Word from Screenshots) */}
                    <div className="space-y-4 pt-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <h5 className="text-xs font-bold text-[#0f172a] dark:text-[#f8fafc] uppercase tracking-wider flex items-center gap-2">
                            <Layers className="w-4 h-4 text-[#2563eb] dark:text-[#3b82f6]" />
                            Transcribed Execution Records (Word-for-Word)
                          </h5>
                          <p className="text-xs text-[#64748b] dark:text-[#94a3b8] mt-0.5">
                            Exact data extracted from the testing spreadsheets without modifications.
                          </p>
                        </div>

                        {/* Search Filter */}
                        <div className="relative w-full sm:w-64">
                          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="text"
                            placeholder="Filter by ID or Name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-[#cbd5e1] dark:border-[#334155] bg-white dark:bg-[#0f1422] text-[#0f172a] dark:text-[#f8fafc] focus:outline-none focus:ring-1 focus:ring-[#2563eb]"
                          />
                        </div>
                      </div>

                      {/* Desktop Document-Style Table View */}
                      <div className="hidden lg:block overflow-x-auto rounded-xl border border-[#e2e8f0] dark:border-[#1e293b] bg-white dark:bg-[#0f1422] shadow-xs">
                        <table className="w-full text-left border-collapse text-xs">
                          <thead>
                            <tr className="bg-[#f1f5f9] dark:bg-[#1a233a] text-[#475569] dark:text-[#cbd5e1] border-b border-[#e2e8f0] dark:border-[#1e293b]">
                              <th className="py-2.5 px-3 font-semibold w-24">Test ID</th>
                              <th className="py-2.5 px-3 font-semibold w-40">Test Name</th>
                              <th className="py-2.5 px-3 font-semibold w-52">Test Description</th>
                              <th className="py-2.5 px-3 font-semibold w-48">Preconditions</th>
                              <th className="py-2.5 px-3 font-semibold w-36">Test Data</th>
                              <th className="py-2.5 px-3 font-semibold w-36">Test Steps</th>
                              <th className="py-2.5 px-3 font-semibold w-48">Expected Result</th>
                              <th className="py-2.5 px-3 font-semibold w-48">Actual Result</th>
                              <th className="py-2.5 px-3 font-semibold w-20 text-center">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#e2e8f0] dark:divide-[#1e293b]">
                            {filteredTestCases.map((tc) => (
                              <tr 
                                key={tc.testId}
                                className="hover:bg-slate-50/70 dark:hover:bg-slate-900/40 transition-colors"
                              >
                                <td className="py-3 px-3 font-mono font-bold text-[#0f172a] dark:text-[#f8fafc] whitespace-nowrap align-top">
                                  {tc.testId}
                                </td>
                                <td className="py-3 px-3 font-medium text-[#1e293b] dark:text-[#f1f5f9] align-top">
                                  {tc.testName}
                                </td>
                                <td className="py-3 px-3 text-[#475569] dark:text-[#cbd5e1] leading-relaxed align-top">
                                  {tc.testDescription}
                                </td>
                                <td className="py-3 px-3 text-[#64748b] dark:text-[#94a3b8] whitespace-pre-line leading-relaxed align-top text-[11px]">
                                  {tc.testPrecondition}
                                </td>
                                <td className="py-3 px-3 text-[#475569] dark:text-[#cbd5e1] whitespace-pre-line font-mono text-[11px] align-top">
                                  {tc.testData}
                                </td>
                                <td className="py-3 px-3 text-[#475569] dark:text-[#cbd5e1] whitespace-pre-line text-[11px] align-top">
                                  {tc.testSteps}
                                </td>
                                <td className="py-3 px-3 text-[#334155] dark:text-[#cbd5e1] whitespace-pre-line leading-relaxed align-top text-[11px]">
                                  {tc.expectedResult}
                                </td>
                                <td className="py-3 px-3 text-[#334155] dark:text-[#cbd5e1] whitespace-pre-line leading-relaxed align-top text-[11px]">
                                  {tc.actualResult}
                                </td>
                                <td className="py-3 px-3 text-center align-top whitespace-nowrap">
                                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800/60">
                                    {tc.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Mobile & Tablet Card Layout */}
                      <div className="grid grid-cols-1 lg:hidden gap-4">
                        {filteredTestCases.map((tc) => (
                          <div
                            key={tc.testId}
                            className="p-4 rounded-xl border border-[#e5e3dc] dark:border-[#1e293b] bg-[#faf9f6] dark:bg-[#131b2e] space-y-3"
                          >
                            <div className="flex items-center justify-between gap-2 border-b border-[#e2e8f0] dark:border-[#1e293b] pb-2">
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#2563eb] text-white">
                                  {tc.testId}
                                </span>
                                <h6 className="font-bold text-xs text-[#0f172a] dark:text-[#f8fafc]">
                                  {tc.testName}
                                </h6>
                              </div>
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                                {tc.status}
                              </span>
                            </div>

                            <p className="text-xs text-[#334155] dark:text-[#cbd5e1] leading-relaxed">
                              <strong className="text-[#0f172a] dark:text-[#f8fafc]">Description: </strong>
                              {tc.testDescription}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                              <div className="p-2.5 rounded-lg bg-white dark:bg-[#0f1422] border border-[#e2e8f0] dark:border-[#1e293b]">
                                <span className="font-semibold text-[#0f172a] dark:text-[#f8fafc] block mb-1 text-[11px] uppercase tracking-wider">
                                  Preconditions
                                </span>
                                <p className="text-[#64748b] dark:text-[#94a3b8] whitespace-pre-line text-[11px]">
                                  {tc.testPrecondition}
                                </p>
                              </div>

                              <div className="p-2.5 rounded-lg bg-white dark:bg-[#0f1422] border border-[#e2e8f0] dark:border-[#1e293b]">
                                <span className="font-semibold text-[#0f172a] dark:text-[#f8fafc] block mb-1 text-[11px] uppercase tracking-wider">
                                  Test Data & Steps
                                </span>
                                <p className="font-mono text-[#475569] dark:text-[#cbd5e1] whitespace-pre-line text-[11px] mb-1">
                                  {tc.testData}
                                </p>
                                <p className="text-[#64748b] dark:text-[#94a3b8] whitespace-pre-line text-[11px]">
                                  {tc.testSteps}
                                </p>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                              <div className="p-2.5 rounded-lg bg-white dark:bg-[#0f1422] border border-[#e2e8f0] dark:border-[#1e293b]">
                                <span className="font-semibold text-emerald-700 dark:text-emerald-400 block mb-0.5 text-[11px]">
                                  Expected Result
                                </span>
                                <p className="text-[#334155] dark:text-[#cbd5e1] whitespace-pre-line text-[11px]">
                                  {tc.expectedResult}
                                </p>
                              </div>

                              <div className="p-2.5 rounded-lg bg-white dark:bg-[#0f1422] border border-[#e2e8f0] dark:border-[#1e293b]">
                                <span className="font-semibold text-blue-700 dark:text-blue-400 block mb-0.5 text-[11px]">
                                  Actual Result
                                </span>
                                <p className="text-[#334155] dark:text-[#cbd5e1] whitespace-pre-line text-[11px]">
                                  {tc.actualResult}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ============================================================== */}
                {/* SECTION 2: BUG REPORTS                                         */}
                {/* ============================================================== */}
                {activeTab === 'bugReports' && (
                  <div className="space-y-6">
                    {/* Header Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#e5e3dc] dark:border-[#1e293b] pb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
                            Section 2 • Defect Management
                          </span>
                          <span className="text-xs text-[#64748b] dark:text-[#94a3b8]">•</span>
                          <span className="text-xs text-[#64748b] dark:text-[#94a3b8]">
                            Documented Defect & Execution Evidence
                          </span>
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-[#0f172a] dark:text-[#f8fafc]">
                          Bug Reports & Defect Evidence
                        </h4>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded text-xs font-bold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                          1 Defect Identified & Documented
                        </span>
                      </div>
                    </div>

                    {/* Part A: Defect Execution Screenshot Evidence */}
                    <div className="p-4 sm:p-5 rounded-xl border border-rose-200 dark:border-rose-900/50 bg-rose-50/40 dark:bg-rose-950/20 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white uppercase">
                            Execution Evidence
                          </span>
                          <h5 className="font-bold text-xs sm:text-sm text-rose-900 dark:text-rose-200">
                            Spreadsheet Row 6: Failed Test TC_ST_TIME_1
                          </h5>
                        </div>
                        <span className="text-xs font-mono text-rose-700 dark:text-rose-400 font-semibold">
                          Status: Fail (Highlighted in Original Matrix)
                        </span>
                      </div>

                      <p className="text-xs text-[#475569] dark:text-[#cbd5e1] leading-relaxed">
                        Defect identified during time format validation: the time field accepted 12-hour format instead of enforcing 24-hour format constraints. Click below to inspect the original high-resolution spreadsheet.
                      </p>

                      {/* Clickable Image Thumbnail to Zoom */}
                      {docImages.find((d) => d.id === 'doc-bug-1') && (
                        <div 
                          onClick={() => setLightboxImage(docImages.find((d) => d.id === 'doc-bug-1')!)}
                          className="group relative rounded-xl border border-rose-300 dark:border-rose-900/60 overflow-hidden cursor-pointer bg-white shadow-xs"
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              setLightboxImage(docImages.find((d) => d.id === 'doc-bug-1')!);
                            }
                          }}
                          aria-label="Inspect bug report evidence screenshot"
                        >
                          <img 
                            src={docImages.find((d) => d.id === 'doc-bug-1')!.src} 
                            alt="Bug Report Evidence Screenshot"
                            className="w-full max-h-56 sm:max-h-72 object-cover object-bottom"
                          />
                          <div className="absolute inset-0 bg-[#0f172a]/35 group-hover:bg-[#0f172a]/45 transition-colors flex items-center justify-center">
                            <span className="px-3.5 py-2 rounded-xl bg-black/80 backdrop-blur-xs text-white text-xs font-semibold flex items-center gap-2 shadow-xl">
                              <ZoomIn className="w-4 h-4 text-rose-400" />
                              <span>Zoom In on Defect Row in Execution Sheet</span>
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Part B: Transcribed Bug Report Record (Verbatim) */}
                    <div className="space-y-4 pt-2">
                      <h5 className="text-xs font-bold text-[#0f172a] dark:text-[#f8fafc] uppercase tracking-wider flex items-center gap-2">
                        <Bug className="w-4 h-4 text-rose-500" />
                        Bug Report Details (Word-for-Word Transcription)
                      </h5>

                      {selectedProject.bugReports.map((bug) => (
                        <div
                          key={bug.bugId}
                          className="p-5 rounded-xl border border-rose-200 dark:border-rose-900/40 bg-white dark:bg-[#131b2e] shadow-xs space-y-4"
                        >
                          {/* Defect Header */}
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e2e8f0] dark:border-[#1e293b] pb-3">
                            <div className="flex items-center gap-2.5">
                              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-rose-600 text-white">
                                {bug.bugId}
                              </span>
                              <div>
                                <h6 className="font-bold text-sm text-[#0f172a] dark:text-[#f8fafc]">
                                  {bug.testName}
                                </h6>
                                <span className="text-[11px] text-[#64748b] dark:text-[#94a3b8] font-mono">
                                  {bug.sourceSheet}
                                </span>
                              </div>
                            </div>
                            <span className="px-2.5 py-1 rounded text-xs font-bold bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
                              Status: {bug.status}
                            </span>
                          </div>

                          {/* Description */}
                          <div>
                            <span className="font-semibold text-xs text-[#0f172a] dark:text-[#f8fafc] block mb-1">
                              Test Description:
                            </span>
                            <p className="text-xs text-[#334155] dark:text-[#cbd5e1] leading-relaxed">
                              {bug.description}
                            </p>
                          </div>

                          {/* Precondition & Steps */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                            <div className="p-3 rounded-lg bg-[#faf9f6] dark:bg-[#0f1422] border border-[#e2e8f0] dark:border-[#1e293b]">
                              <span className="font-bold text-[#0f172a] dark:text-[#f8fafc] block mb-1.5 text-[11px] uppercase tracking-wider">
                                Test Precondition
                              </span>
                              <p className="text-[#475569] dark:text-[#cbd5e1] whitespace-pre-line text-xs leading-relaxed">
                                {bug.preconditions}
                              </p>
                            </div>

                            <div className="p-3 rounded-lg bg-[#faf9f6] dark:bg-[#0f1422] border border-[#e2e8f0] dark:border-[#1e293b]">
                              <span className="font-bold text-[#0f172a] dark:text-[#f8fafc] block mb-1.5 text-[11px] uppercase tracking-wider">
                                Test Data & Test Steps
                              </span>
                              <p className="font-mono text-[#334155] dark:text-[#cbd5e1] whitespace-pre-line text-xs mb-2">
                                {bug.testData}
                              </p>
                              <p className="text-[#475569] dark:text-[#cbd5e1] whitespace-pre-line text-xs leading-relaxed">
                                {bug.stepsToReproduce}
                              </p>
                            </div>
                          </div>

                          {/* Discrepancy: Expected vs Actual */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                            <div className="p-3.5 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40">
                              <div className="flex items-center gap-1.5 mb-1 text-emerald-800 dark:text-emerald-400 font-bold">
                                <CheckSquare className="w-3.5 h-3.5" />
                                <span>Expected Result</span>
                              </div>
                              <p className="text-emerald-900 dark:text-emerald-200 text-xs leading-relaxed">
                                {bug.expectedResult}
                              </p>
                            </div>

                            <div className="p-3.5 rounded-lg bg-rose-50/80 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60">
                              <div className="flex items-center gap-1.5 mb-1 text-rose-800 dark:text-rose-400 font-bold">
                                <AlertTriangle className="w-3.5 h-3.5" />
                                <span>Actual Result (Defect)</span>
                              </div>
                              <p className="text-rose-900 dark:text-rose-200 text-xs font-medium leading-relaxed">
                                {bug.actualResult}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ============================================================== */}
                {/* SECTION 3: PROJECT OVERVIEW                                    */}
                {/* ============================================================== */}
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    {/* Project Description */}
                    <div>
                      <h4 className="text-xs font-bold text-[#64748b] dark:text-[#94a3b8] uppercase tracking-wider mb-2">
                        Project Description
                      </h4>
                      <p className="text-sm sm:text-base text-[#1e293b] dark:text-[#f1f5f9] leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Work Performed */}
                    <div className="p-5 rounded-xl bg-[#faf9f6] dark:bg-[#131b2e] border border-[#e5e3dc] dark:border-[#1e293b]">
                      <h4 className="text-xs font-bold text-[#0f172a] dark:text-[#f8fafc] uppercase tracking-wider mb-3 flex items-center gap-2">
                        <ClipboardCheck className="w-4 h-4 text-[#2563eb] dark:text-[#3b82f6]" />
                        Work Performed
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {selectedProject.workPerformed.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] dark:text-[#cbd5e1]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] dark:bg-[#3b82f6] mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Quick Links to Sections */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <button
                        type="button"
                        onClick={() => setActiveTab('testCases')}
                        className="p-4 rounded-xl border border-[#e2e8f0] dark:border-[#1e293b] bg-white dark:bg-[#0f1422] hover:border-[#2563eb]/50 text-left transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-[#2563eb] dark:text-[#3b82f6]">Section 1</span>
                          <CheckSquare className="w-4 h-4 text-[#64748b] group-hover:text-[#2563eb] transition-colors" />
                        </div>
                        <div className="font-bold text-sm text-[#0f172a] dark:text-[#f8fafc] mb-1">
                          View Test Cases
                        </div>
                        <p className="text-xs text-[#64748b] dark:text-[#94a3b8]">
                          {selectedProject.testCases.length} executed test cases & 2 original spreadsheet captures.
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveTab('bugReports')}
                        className="p-4 rounded-xl border border-rose-200 dark:border-rose-900/40 bg-white dark:bg-[#0f1422] hover:border-rose-400 text-left transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-rose-600 dark:text-rose-400">Section 2</span>
                          <Bug className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="font-bold text-sm text-[#0f172a] dark:text-[#f8fafc] mb-1">
                          View Bug Reports
                        </div>
                        <p className="text-xs text-[#64748b] dark:text-[#94a3b8]">
                          Documented defect TC_ST_TIME_1 with execution evidence and reproduction steps.
                        </p>
                      </button>
                    </div>
                  </div>
                )}

              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 border-t border-[#e5e3dc] dark:border-[#1e293b] flex items-center justify-between gap-3 bg-[#faf9f6]/95 dark:bg-[#131b2e]/95">
                <span className="text-xs text-[#64748b] dark:text-[#94a3b8] hidden sm:inline">
                  QA Portfolio Documentation • Static Screenshots & Verbatim Execution Logs
                </span>
                <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                  <a
                    href="#contact"
                    onClick={() => {
                      handleCloseModal();
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#0f172a] dark:text-[#f8fafc] bg-white dark:bg-[#1a233a] hover:bg-[#f1f5f9] dark:hover:bg-[#26334a] border border-[#cbd5e1] dark:border-[#334155] rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Discuss Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-1.5 text-xs font-semibold text-white bg-[#0f172a] hover:bg-[#1e293b] dark:bg-[#f8fafc] dark:text-[#0f172a] dark:hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal for Zooming Static Testing Documents */}
      {lightboxImage && (
        <DocumentLightbox
          image={lightboxImage}
          onClose={() => setLightboxImage(null)}
          onNavigateNext={handleNavigateNextDoc}
          onNavigatePrev={handleNavigatePrevDoc}
          currentIndex={currentLightboxIndex}
          totalImages={docImages.length}
        />
      )}
    </section>
  );
};
