import { Capabilities } from "@wdio/types";
import { TestCaseResult } from "azure-devops-node-api/interfaces/TestInterfaces";

export interface AzureReporterOptions {
  outputDir?: string;
  azureConfigurationCapabilities: AzureConfigurationCapability[];
  caseIdRegex?: string;
}

export interface AzureConfigurationCapability {
  azureConfigId: string;
  capabilities: Capabilities.DesiredCapabilities;
}

export interface Screenshot {
  testCaseId: string;
  iterationId: number;
  actionPath: string;
  base64encodedContent: string;
}

export interface TestReport {
  azureConfigurationId: string;
  testResults: TestCaseResult[];
  screenshots: Screenshot[];
}
