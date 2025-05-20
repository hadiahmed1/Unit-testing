import type { Config } from "@jest/types";
const base = '<rootDir>/src/app/server_app';
const baseTest = '<rootDir>/src/test/server_app';

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [`${base}/**/*.ts`],
  testMatch: [`${baseTest}/**/*.ts`]
}

export default config;