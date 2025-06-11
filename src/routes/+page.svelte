<script>
    import { browser } from '$app/environment';
    const feedUrl = '/cursor-changelog.xml';
    const githubUrl = 'https://github.com/marcusotterstad/rss';
    
    function copyToClipboard() {
        if (browser) {
            navigator.clipboard.writeText(window.location.origin + feedUrl);
        }
    }
</script>

<main class="container">
    <h1>Cursor Changelog RSS Feed</h1>
    <p>Subscribe to Cursor's changelog using the following RSS feed URL:</p>
    <div class="feed-url">
        <code>{browser ? window.location.origin + feedUrl : feedUrl}</code>
        <button on:click={copyToClipboard}>
            Copy URL
        </button>
    </div>
    
    <div class="github-info">
        <p>This is an unofficial RSS feed for Cursor's changelog. The source code is open and available on GitHub:</p>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" class="github-link">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            View on GitHub
        </a>
    </div>

    <footer>
        <p>Created by <a href="https://github.com/marcusotterstad" target="_blank" rel="noopener noreferrer">Marcus Otterstad</a></p>
        <p class="copyright">© {new Date().getFullYear()} - Not affiliated with Cursor</p>
    </footer>
</main>

<style>
    .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        font-family: system-ui, -apple-system, sans-serif;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    h1 {
        color: #333;
        margin-bottom: 1rem;
    }

    .feed-url {
        background: #f5f5f5;
        padding: 1rem;
        border-radius: 4px;
        margin: 1rem 0;
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    code {
        font-family: monospace;
        background: #fff;
        padding: 0.5rem;
        border-radius: 4px;
        flex-grow: 1;
    }

    button {
        background: #007bff;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.9rem;
    }

    button:hover {
        background: #0056b3;
    }

    .github-info {
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid #eee;
    }

    .github-link {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        color: #333;
        text-decoration: none;
        padding: 0.5rem 1rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        margin-top: 1rem;
    }

    .github-link:hover {
        background: #f5f5f5;
    }

    .github-link svg {
        color: #333;
    }

    footer {
        margin-top: auto;
        padding-top: 2rem;
        border-top: 1px solid #eee;
        text-align: center;
        color: #666;
        font-size: 0.9rem;
    }

    footer a {
        color: #007bff;
        text-decoration: none;
    }

    footer a:hover {
        text-decoration: underline;
    }

    .copyright {
        margin-top: 0.5rem;
        font-size: 0.8rem;
    }
</style>
