<div class="{loading ? 'max-h-8' : 'max-h-96'} duration-300 overflow-hidden">
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
            <dl class="h-72 overflow-auto snap-y">
                {#each tabs.get(active) as repo}
                <dt class="text-2xl mt-4">
                    <a href="{repo.url}" target="_blank">{repo.name}</a>
                </dt>
                <dd class="text-lg mb-4 italic text-neutral-300">{repo.description}</dd>
                {/each}
            </dl>
        </div>
    {/if}
</div>

<script lang="ts">
    import Tab, { Label } from '@smui/tab';
    import TabBar from '@smui/tab-bar';
    import CircularProgress from '@smui/circular-progress';
    import { GithubApiService } from "../../services/github-api.service";
    import { RepoModel } from '../../model/repo.model';

    let active = 'Java';
    let loading: boolean = true;
    let tabs: Map<string, RepoModel[]> = new Map();

    new GithubApiService().getRepos().then(r => {
        return r.json();
    }).then((result: any[]) => {
        tabs = new Map();
        for(const repo of result) {
            if(tabs.has(repo.language)) {
                tabs.get(repo.language)?.push(new RepoModel(repo));
            }
            else {
                tabs.set(repo.language, [new RepoModel(repo)]);
            }
        }
        loading = false;
    });
</script>
