import RSS from 'rss';
import * as cheerio from 'cheerio';

export async function GET() {
    try {
        // Fetch the changelog page
        const response = await fetch('https://www.cursor.com/changelog');
        const html = await response.text();
        const $ = cheerio.load(html);

        // Create new RSS feed
        const feed = new RSS({
            title: 'Cursor Changelog',
            description: 'Latest updates and changes from Cursor',
            feed_url: 'https://www.cursor.com/changelog',
            site_url: 'https://www.cursor.com',
            language: 'en',
            pubDate: new Date(),
        });

        // Find all changelog entries
        $('article').each((i, elem) => {
            const $article = $(elem);
            const version = $article.find('.inline-flex.items-center.font-mono').text().trim();
            const date = $article.find('.text-sm.text-brand-gray-500').text().trim();
            const title = $article.find('h2 a').text().trim();
            const content = $article.find('ul li').map((i, el) => $(el).text().trim()).get().join('\n');
            const updateNote = $article.find('p').text().trim();

            if (version && date) {
                feed.item({
                    title: `${version} - ${title}`,
                    description: `${content}${updateNote ? '\n\n' + updateNote : ''}`,
                    date: new Date(date),
                    url: 'https://www.cursor.com/changelog',
                });
            }
        });

        // Return the RSS feed
        return new Response(feed.xml(), {
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
            }
        });
    } catch (error) {
        console.error('Error generating RSS feed:', error);
        return new Response('Error generating RSS feed', { status: 500 });
    }
} 