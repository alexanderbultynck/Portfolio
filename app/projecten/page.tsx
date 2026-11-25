import { getRepositories } from "@/lib/github";

export default async function Projects() {
    const repos = await getRepositories();

    return (
        <main className="p-6">
            <h1 className="mb-4 text-xl font-bold">
                Mijn projecten
            </h1>

            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="text-left font-bold">
                            <th className="border border-gray-300 px-4 py-2">
                                Project
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                GitHub
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {repos.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={2}
                                    className="border border-gray-300 px-4 py-2 text-center text-gray-500"
                                >
                                    Geen repositories gevonden.
                                </td>
                            </tr>
                        ) : (
                            repos.map(({ id, name, url }) => (
                                <tr key={id}>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {name}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <a
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link"
                                        >
                                            Bekijk op GitHub
                                        </a>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
