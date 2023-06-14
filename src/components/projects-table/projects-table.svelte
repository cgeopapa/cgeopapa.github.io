<div class="{loading ? 'max-h-8' : 'max-h-animation-end'} duration-300 overflow-hidden">
    {#if loading}
        <div class="flex justify-center">
            <CircularProgress class="h-8 w-8" indeterminate />
        </div>
    {:else}
        <div>
            <TabBar tabs={[...tabs.keys()]} let:tab bind:active>
                <Tab {tab}>
                    <Label>{tab}</Label>
                </Tab>
            </TabBar>
            <div class="h-96 overflow-auto snap-y">
                {#each tabs.get(active) as repo}
                <div class="flex items-center border-b-1 border-accent border-opacity-50 hover:bg-accent hover:bg-opacity-5 duration-300">
                    <div class="w-full">
                        <div class="text-2xl mt-4 ">
                            <a href="{repo.url}" target="_blank">{repo.name}</a>
                        </div>
                        <div class="text-lg mb-4 italic text-neutral-300">{repo.description}</div>
                    </div>
                    <a href="{repo.url}" target="_blank" use:Ripple={{ surface: true, color: 'primary' }}
                    tabindex="0" role="button" class="text-center border-1 rounded-md border-neutral-500 m-2 py-2 w-44">
                        Show on GitHub
                    </a>
                </div>
                
                {/each}
            </div>
        </div>
    {/if}
</div>

<script lang="ts">
    import Tab, { Label } from '@smui/tab';
    import TabBar from '@smui/tab-bar';
    import Ripple from '@smui/ripple';
    import CircularProgress from '@smui/circular-progress';
    import { GithubApiService } from "../../services/github-api.service";
    import { RepoModel } from '../../model/repo.model';

    let active = 'all';
    let loading: boolean = true;
    let tabs: Map<string, RepoModel[]> = new Map();

    new GithubApiService().getRepos().then(r => {
        return r.json();
    }).then((result: any[]) => {
        tabs = new Map();
        tabs.set("all", []);
        for(const repo of result) {
            const repoModel = new RepoModel(repo);
            if(repoModel.description) {
                if(tabs.has(repo.language)) {
                    tabs.get(repo.language)?.push(repoModel);
                }
                else {
                    tabs.set(repo.language, [repoModel]);
                }
                tabs.get("all").push(repoModel);
            }
        }
        loading = false;
    });
</script>
