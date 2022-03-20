import * as fs from "fs";

export const sendHtmlStringResume = (req, res) => {
   const resume = fs.readFileSync("./data/resume.txt").toString();
   res.json({ resume });
};
