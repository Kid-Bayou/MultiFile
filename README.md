
# Multi File Uploader

This document outlines the development process for a multi-file uploader application. The application will allow users to upload multiple files (optional) with descriptions (required). Uploaded files will be displayed in a table format with the following information:

- **Description**: The user-provided description for each file.
- **File**: A link to download or view the uploaded file.
- **Maximum file size**: 10MB.
- **Action**: Buttons for editing and deleting individual files.

---

## Functional Requirements

- Users can upload multiple files, each with a description.
- Users can view, edit, and delete uploaded files.

## Technical Requirements

### Front-end
- **Technologies**: React with TypeScript.
- **Components**:
  - **File Upload Form**: A form to input the file and description.
    - Input for file selection (optional).
    - Input for description (required).
    - Button to submit the form.
    - Use React state to handle form data and file storage before submission.
  - **Files Table**: Displays uploaded files, allowing download, view, edit, and delete operations.
    - Columns for Description, File actions (download/view), and Edit/Delete.
    - Implement functionalities to interact with the backend (fetching files, deleting, updating).
- **Restrictions**:
  - Use client-side validation to ensure the file size is within limits.

### API (Back-End)
- **Technologies**: Node.js with TypeScript, Express, Sequelize, and MySQL.
- **API Endpoints**:
  - `GET /files`: Retrieves all files.
  - `POST /files`: Uploads a new file.
  - `DELETE /files/:id`: Deletes a file.
  - `PUT /files/:id`: Updates file information.
- Used MVC Architecture.
- Used Sequelize ORM.

## Linking Front-End and Back-End
- Used Axios in the React application to communicate with the backend.

## Deployment

### Render Deployment Link
https://multifile-p12t.onrender.com

### Vercel Deployment Link
https://multi-file.vercel.app/
