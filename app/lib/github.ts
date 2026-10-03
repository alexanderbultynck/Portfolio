import { Octokit, RequestError } from "octokit";

interface RepositoryInfo {
    id: number | bigint;
    name: string;
    url: string;
}

const octokit = new Octokit({
    auth: process.env["GITHUB_TOKEN"]
});

export async function getRepositories(): Promise<RepositoryInfo[]> {
    try {
        const response = await octokit.request("GET /user/repos", {
            visibility: "public",
            affiliation: "owner"
        });
        console.log(response)
        return response.data.map((repo) => ({
            id: repo.id,
            name: repo.name,
            url: repo.html_url
        }));
    } catch (error) {
        if (error instanceof RequestError) {
            console.error(`GitHub API Error [${error.status}]: ${error.message}`);
        } else {
            console.error("Onverwachte fout:", error);
        }
        return [];
    }
}