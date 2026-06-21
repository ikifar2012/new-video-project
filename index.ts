import { text } from "@clack/prompts"
import boxen from "boxen"
import pc from "picocolors"
import terminalLink from "terminal-link"
import path from "path"
import process from "process"
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";

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
if (!existsSync(projectLocation)) {
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

const donationUrl = "https://ko-fi.com/mathesonsteplock"
const donationLink = terminalLink("ko-fi.com/mathesonsteplock", donationUrl, {
    fallback: (text, url) => `${text} (${url})`
})

const donationCard = boxen(
    [
        pc.bold(pc.cyan("Support this project")),
        "If this helped, consider buying me a coffee:",
        pc.underline(pc.blue(donationLink)),
        pc.dim("No pressure. I just really enjoy creating these tools.")
    ].join("\n"),
    {
        padding: 1,
        margin: { top: 1 },
        borderStyle: "round",
        borderColor: "cyan"
    }
)

console.log(donationCard)