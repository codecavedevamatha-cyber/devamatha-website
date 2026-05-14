// Google Apps Script for Management Quota Enquiry Form
// Deploy this script as a Web App to handle form submissions

// Sheet ID from the URL: 1R352BBKJ0joCzRkBysw0wpHwSjciDfnhjy7RGnMPJww
const SHEET_ID = '1R352BBKJ0joCzRkBysw0wpHwSjciDfnhjy7RGnMPJww';
const SHEET_NAME = 'Sheet1'; // Change if your sheet has a different name

function doPost(e) {
  try {
    // Handle FormData from the form submission
    const params = e.parameter;
    
    // Get the sheet
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({ 
        status: 'error', 
        message: 'Sheet not found' 
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Prepare the row data in the correct column order
    const rowData = [
      params.applicantName || '',
      params.programme || '',
      params.mobileNumber || '',
      params.address || '',
      params.totalMarks || '',
      params.stream || '',
      params.lastInstitution || '',
      params.enquiryDate || '',
      params.enquiryTime || ''
    ];
    
    // Append the row to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({ 
      status: 'success', 
      message: 'Enquiry submitted successfully' 
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({ 
      status: 'error', 
      message: error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to set up the sheet headers (run this once manually)
function setupSheet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    // Create sheet if it doesn't exist
    sheet = ss.insertSheet(SHEET_NAME);
  }
  
  // Clear existing data (optional - remove if you want to keep existing data)
  sheet.clear();
  
  // Set headers
  const headers = [
    'Name of the Applicant',
    'Programme',
    'Mobile Number',
    'Address',
    'Total Marks Obtained',
    'Stream',
    'Last Institution Studied',
    'Enquiry Date',
    'Enquiry Time'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format the header row
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  sheet.getRange(1, 1, 1, headers.length).setBackground('#9333EA');
  sheet.getRange(1, 1, 1, headers.length).setFontColor('#FFFFFF');
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length);
  
  Logger.log('Sheet setup complete');
}
