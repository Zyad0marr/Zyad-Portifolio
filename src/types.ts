export interface SkillCategory {
  category: string;
  subtitle: string;
  icon: string;
  skills: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface ProjectDocumentImage {
  id: string;
  section: 'Test Cases' | 'Bug Reports' | 'Test Scenarios';
  sheetName: string;
  title: string;
  subtitle: string;
  src: string;
  caption: string;
  notes?: string;
  highlightDefect?: string;
}

export interface TestCaseRecord {
  testId: string;
  testName: string;
  testDescription: string;
  testPrecondition: string;
  testData: string;
  testSteps: string;
  expectedResult: string;
  actualResult: string;
  status: 'Passed' | 'Fail';
}

export interface BugReportRecord {
  bugId: string;
  testName: string;
  description: string;
  preconditions: string;
  testData: string;
  stepsToReproduce: string;
  expectedResult: string;
  actualResult: string;
  status: 'Fail';
  sourceSheet: string;
  screenshotSrc: string;
}

export interface QAProjectItem {
  id: string;
  title: string;
  category: string;
  type: string;
  shortDescription: string;
  description: string;
  workPerformed: string[];
  deliverableTags: string[];
  testCases: TestCaseRecord[];
  bugReports: BugReportRecord[];
  documentationImages: ProjectDocumentImage[];
}
