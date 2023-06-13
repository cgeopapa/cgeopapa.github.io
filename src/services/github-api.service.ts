export class GithubApiService {
    private readonly url = 'https://api.github.com/users/cgeopapa/repos';

    public getRepos() {
        return fetch(this.url);
    }
}