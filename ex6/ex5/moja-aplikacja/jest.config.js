module.exports = {
    // Wskazuje, które pliki zawierają testy
    testMatch: [
      '<rootDir>/tests/**/*.test.{js,jsx,ts,tsx}',
    ],
  
    // Wskazuje, jakie moduły powinny być transformowane
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    // w pliku jest.config.js lub w konfiguracji Jesta

    testEnvironment: 'jsdom',
    globals: {
      'ts-jest': {
        tsconfig: 'path/to/your/tsconfig.json',
        esModuleInterop: true,
      },
    },
  
  
  
};
