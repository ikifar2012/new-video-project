import {text } from "@clack/prompts"
import path from "path"
import process from "process"
import { mkdir, exists } from "node:fs/promises";

// get current date and time
const datetime = new Date().toDateString();

const projectName = await text({
    message: "What is the name of your project?",
    placeholder: `My Video Project - ${datetime}`,
    defaultValue: `My Video Project - ${datetime}`
    })

    const projectLocationPlaceholder = path.join(process.cwd(), projectName.toString()) as string

    const projectLocation = await text({
    message: "Where do you want to create your project?",
    placeholder: projectLocationPlaceholder,
    defaultValue: projectLocationPlaceholder
    }) as string

    // create the project directory
    // check if the directory already exists
    if (!(await exists(projectLocation))) {
        await mkdir(projectLocation, { recursive: true })
        console.log(`Project created at ${projectLocation}`)
    }
// scaffold the project structure
await mkdir(path.join(projectLocation, "Assets", "Video", "RAW", "Transcoded"), { recursive: true })
await mkdir(path.join(projectLocation, "Assets", "Video", "External", "Transcoded"), { recursive: true })
await mkdir(path.join(projectLocation, "Assets", "Audio", "Multitrack"), { recursive: true })
await mkdir(path.join(projectLocation, "Assets", "Images", "Frames"), { recursive: true })
await mkdir(path.join(projectLocation, "Exports"), { recursive: true })
console.log("Project structure created successfully!")
