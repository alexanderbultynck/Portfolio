import { getRepositories } from "../lib/github";

export const dynamic = "force-dynamic";

export default async function Projects() {
    const repos = await getRepositories();

    return (
        <main className="p-6">
            <h1 className="text-xl font-bold mb-4">Mijn projecten</h1>
            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="text-left font-bold">
                        <th className="border border-gray-300 px-4 py-2">Project</th>
                        <th className="border border-gray-300 px-4 py-2">URL</th>
                    </tr>
                </thead>
                <tbody>
                    {repos.length === 0 ? (
                        <tr>
                            <td colSpan={2} className="border border-gray-300 px-4 py-2 text-center text-gray-500">
                                Geen repositories gevonden of er is een fout opgetreden.
                            </td>
                        </tr>
                    ) : (
                        repos.map(({id, name, url}) => (
                            <tr key={id}>
                                <td className="border border-gray-300 px-4 py-2">
                                    {name}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <a className="link" href={url}>{url}</a>
                                </td>
                            </tr>
                        )))}
                </tbody>
            </table>
        </main>
    );
}