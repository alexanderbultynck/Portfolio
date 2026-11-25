import { Octokit, RequestError } from "octokit";
import { RepositoryInfo } from "@/types/github";

const octokit = new Octokit();

const version: string = '2026-03-10'

export async function getRepositories(): Promise<RepositoryInfo[]> {
    try {
        const response = await octokit.request("GET /users/{username}/repos", {
            username: "alexanderbultynck",
            sort: "created",
            direction: "asc",
            headers: {
                'X-GitHub-Api-Version': version
            }
        });
        return response.data.map((repo): RepositoryInfo => ({
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