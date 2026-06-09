import { Env, SiteConfig } from './types';

export function getSiteConfig(env: Env, domain: string): SiteConfig | undefined {
    const configs: { [domain: string]: SiteConfig } = {
        'releases.seapath.org': {
            name: 'SEAPATH releases',
            bucket: env.BUCKET_bucketname,
            desp: {
                '/': 'SEAPATH releases',
                '/builds': 'Weekly builds',
                '/seapath-installer-bundled': 'Official SEAPATH releases',
                '/favicon.png': 'SEAPATH favicon',
            },
            showPoweredBy: false, // Set to false to hide the "Powered by" information at footer

            /// Decode URI when listing objects, useful when you have space or special characters in object key
            /// Recommended to enable it for new installations, but default to false for backward compatibility
            decodeURI: true,

            /// [Optional] redirect function
            /// Example: redirect requests for '/old-path' to '/new-path' and force the redirect even if
            /// an object exists at the original key.
            // redirect: async (bucket, key: string) => {
            //     if (key === 'old-path') {
            //         return { key: 'new-path', force: true };
            //     }
            //     return { key, force: false };
            // },

            /// [Optional] sortFn: Custom sorting function for files and folders
            /// Example: sort in descending lexicographical order
            // sortFn: {
            //     files: (a, b) => b.key.localeCompare(a.key),
            //     folders: (a, b) => b.localeCompare(a),
            // },

            /// [Optional] Legal information of your website
            /// Your local government (for example Mainland China) may requires you to put some legal info at footer
            /// and you can put it here.
            /// It will be treated as raw HTML.
            // legalInfo: "Legal information of your website",

            /// [Optional] favicon, should be a URL to **PNG IMAGE**. Default to Cloudflare R2's logo
            favicon: 'favicon.png',

            /// [Optional] **Dangerous**: Enabling it may disrupte the normal reading of existing object
            /// By default, r2-dir-list will not list directory if the request path is a object to prevent disrupting
            /// the normal reading of existing object.
            /// Enabling this will allow r2-dir-list to list directory even if the request path is a 0-byte object.
            /// Do not use them unless you know what you are doing!
            dangerousOverwriteZeroByteObject: true,
        },
    };
    return configs[domain];
}
