# LWC Development Server

A lightweight development server for Lightning Web Components (LWC) projects. This server allows you to develop and test LWC components in isolation, outside of the Salesforce platform.

## Features

- Hot reloading support
- SLDS (Salesforce Lightning Design System) integration
- Modern build system using Rollup
- Local development server

## Prerequisites

- Node.js (v14 or later recommended)
- npm or yarn package manager

## Installation

1. Clone this repository
2. Install dependencies using one of the following commands:

```bash
# Using npm
npm install

# Using yarn
yarn install
```

## Usage

To start the development server, run one of the following commands:

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

The server will start and your application will be available at `http://localhost:3000` (or another port if 3000 is occupied).

## Project Structure

```
src/
  └── c/                   # LWC components
      ├── app/            # Main application component
      ├── header/         # Header component
      ├── table/          # Table components
      └── ...            # Other components
public/
  └── index.html         # Main HTML entry point
```

## Technologies Used

- Lightning Web Components (LWC)
- Salesforce Lightning Design System (SLDS)
- Rollup for bundling
- Live Server for development

## Contributing

Feel free to open issues and submit pull requests.

## License

MIT