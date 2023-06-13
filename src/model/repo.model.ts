export class RepoModel {
    name: string;
    description: string;
    url: string;

    constructor(repo: any) {
        this.name = repo.name;
        this.description = repo.description;
        this.url = repo.html_url;
    }
}
