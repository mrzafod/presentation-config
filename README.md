# Wooclap config page (Vite + React + TypeScript)

## Quickstart
`npm install && npm run dev`

## Summarize
- I would classify this ticket as easy-to-go
- ~1 hour for project setup
- ~1 hour for reading the ticket & exploring the original page
- ~4 hours for coding

## Task notes
- I found the task quite interesting—lots of small improvements came to mind right away
- Used LocalStorage for taking notes. It works fine here, but I would not recommend it in production: Limited size, No async API model. Can impact responsiveness and cause errors
- Added scroll effect for the slide preview sidebar, pointing directly to the active slide
- Did not use lazy loading (nice-to-have)
- Did not optimize images (nice-to-have)
- Did not add accessibility improvements (nice-to-have)


## Original page improvements
> “Everyone loves free speech—until it’s about them.” 😅

![App Screenshot](./public/wooclap-origin-annotated.png)

- Add a confirmation dialog when the user clicks the trash button on a slide. Currently it’s too easy to delete, and undo requires discarding everything
- Add scroll into view for the active slide in the right sidebar
- Move SpeakerNotes textarea directly below the slide, similar to PowerPoint or Google Slides
- Make the help button smaller — on medium screens it overlaps important controls
- Review the component tree for hidden/unused React elements. The screenshot shows several hidden items behind the page (possibly unnecessary)