# Syllabus to Calendar Generator

A simple web application that uses the **Gemini API** to intelligently extract due dates, exams, and assignments from one or more course syllabi and generate a single, consolidated `.ics` file for easy import into **Google Calendar**, **Outlook**, or **Apple Calendar**.

**Live Demo:** [syllabus-google-calendar.netlify.app](syllabus-google-calendar.netlify.app)

---

## Features

- **Multi-File Upload:** Process multiple syllabi (`PDF`, `TXT`, `DOCX`) at once.  
- **AI-Powered Extraction:** Uses the **Gemini 2.5 Flash** model with structured JSON output to reliably find dates and assignment details.  
- **Date Filtering:** Ensures only relevant events are extracted based on Course Start and End Dates.  
- **Clean Visualization:** Assignments are grouped by course and displayed in both a **Grouped List View** and **Calendar Grid View**.  
- **Clear Event Titles:** Exports events with the course name in the title (e.g., `[SCOM 101] Midterm Exam`) for easy identification.  
- **Easy Export:** Generates a single, consolidated `.ics` file and guides users directly to the **Google Calendar import** page.  

---

## How to Use

1. **Set Dates:** Enter the Course Start and End Dates for your semester.  
2. **Upload Syllabi:** Click the file input and select one or more syllabus files.  
   - *Recommendation:* Use text-searchable PDFs or plain TXT files. Scanned (image) PDFs will not work.  
3. **Generate:** Click **Generate Calendar**, the app will process each file using the Gemini API.  
4. **Review:** Check the extracted events in either the **List View** or **Calendar View**.  
5. **Export & Import:**  
   - Click **Export Consolidated .ICS**  
   - The `.ics` file will download automatically.  
   - A new browser tab will open the **Google Calendar import page**, upload the downloaded file there.  

---

## Deployment (For Developers)

This project is a single file, client-side application (`index.html`) and can be hosted easily on **GitHub Pages** or any static hosting provider.

### Prerequisites
- A **Gemini API Key**  
- A **GitHub Account**

---

## Security Warning (CRITICAL)

Your **Gemini API Key** is stored in the client-side JavaScript and will be publicly visible in the browser’s source code.  
To protect your budget, **you MUST set a daily quota limit** on your API key in the **Google AI Console**.  
This ensures that if the key is compromised, your spending is capped.

---

## Technology Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | HTML5, Tailwind CSS (via CDN) |
| **AI Backend** | Gemini API (`gemini-2.5-flash-preview-09-2025`) |
| **Data Extraction** | Structured JSON Schema |
| **Calendar Format** | iCalendar (`.ics`) standard |

---

## License

This project is licensed under the **MIT License**.
