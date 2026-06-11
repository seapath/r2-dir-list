import { Env, SiteConfig } from './types';

export function getSiteConfig(env: Env, domain: string): SiteConfig | undefined {
    const configs: { [domain: string]: SiteConfig } = {
        'releases.seapath.org': {
            name: 'SEAPATH releases',
            bucket: env.BUCKET_bucketname,
            desp: {
                '/': 'SEAPATH releases',
                '/builds': 'SEAPATH builds',
                '/builds/v*': 'Official SEAPATH releases',
                '/favicon.png': 'SEAPATH favicon',
                '/builds/v*/seapath-installer_v*_all.deb': 'SEAPATH Live Installer deb package',
                '/builds/v*/seapath-live-installer-v*-empty.iso.zip': 'SEAPATH Live Installer ISO with no preinstalled images (empty)',
                '/builds/v*/seapath-live-installer-v*-seapath-images-v*.iso.zip': 'SEAPATH Live Installer ISO with preinstalled images',
                '/builds/v*/seapath-v*-artifacts-key.pub': 'Public SSH key use as a default key in SEAPATH examples',
                '/builds/v*/seapath-v*-artifacts-key': 'Private SSH key use as a default key in SEAPATH examples',
                '/builds/v*/seapath-v*-debian-autoinstaller-fai.iso': 'SEAPATH Debian flavor auto-installer ISO',
                '/builds/v*/seapath-v*-flasher-image.rootfs.wic.bmap': 'SEAPATH Yocto flavor auto-installer bmap file',
                '/builds/v*/seapath-v*-flasher-image.rootfs.wic.gz': 'SEAPATH Yocto flavor auto-installer compressed raw image',
                '/builds/v*/seapath-v*-generic-cluster.rootfs.raw.bmap': 'SEAPATH Debian flavor cluster hypervisor bmap file',
                '/builds/v*/seapath-v*-generic-cluster.rootfs.raw.gz': 'SEAPATH Debian flavor cluster hypervisor compressed raw image',
                '/builds/v*/seapath-v*-generic-observer.rootfs.raw.bmap': 'SEAPATH Debian flavor observer bmap file',
                '/builds/v*/seapath-v*-generic-observer.rootfs.raw.gz': 'SEAPATH Debian flavor observer compressed raw image',
                '/builds/v*/seapath-v*-generic-standalone.rootfs.raw.bmap': 'SEAPATH Debian flavor standalone hypervisor bmap file',
                '/builds/v*/seapath-v*-generic-standalone.rootfs.raw.gz': 'SEAPATH Debian flavor standalone hypervisor compressed raw image',
                '/builds/v*/seapath-v*-guest-efi-image.rootfs.spdx.json': 'Yocto test VM SPDX SBOM',
                '/builds/v*/seapath-v*-guest-efi-image.rootfs.wic.qcow2': 'Yocto test VM',
                '/builds/v*/seapath-v*-guest.qcow2': 'Debian test VM',
                '/builds/v*/seapath-v*-host-cluster-efi-image.rootfs.spdx.json': 'SEAPATH Yocto flavor cluster hypervisor SPDX SBOM',
                '/builds/v*/seapath-v*-host-cluster-efi-image.rootfs.swu': 'SEAPATH Yocto flavor cluster hypervisor update file',
                '/builds/v*/seapath-v*-host-cluster-efi-image.rootfs.wic.bmap': 'SEAPATH Yocto flavor cluster hypervisor bmap file',
                '/builds/v*/seapath-v*-host-cluster-efi-image.rootfs.wic.gz': 'SEAPATH Yocto flavor cluster hypervisor compressed raw image',
                '/builds/v*/seapath-v*-host-standalone-efi-image.rootfs.spdx.json': 'SEAPATH Yocto flavor standalone hypervisor SPDX SBOM',
                '/builds/v*/seapath-v*-host-standalone-efi-image.rootfs.swu': 'SEAPATH Yocto flavor standalone hypervisor update file',
                '/builds/v*/seapath-v*-host-standalone-efi-image.rootfs.wic.bmap': 'SEAPATH Yocto flavor standalone hypervisor bmap file',
                '/builds/v*/seapath-v*-host-standalone-efi-image.rootfs.wic.gz': 'SEAPATH Yocto flavor standalone hypervisor compressed raw image',
                '/builds/v*/seapath-v*-host-standalone-efi-test-image.rootfs.spdx.json': 'SEAPATH Yocto flavor standalone hypervisor test SPDX SBOM',
                '/builds/v*/seapath-v*-host-standalone-efi-test-image.rootfs.swu': 'SEAPATH Yocto flavor standalone hypervisor test update file',
                '/builds/v*/seapath-v*-host-standalone-efi-test-image.rootfs.wic.bmap': 'SEAPATH Yocto flavor standalone hypervisor test bmap file',
                '/builds/v*/seapath-v*-host-standalone-efi-test-image.rootfs.wic.gz': 'SEAPATH Yocto flavor standalone hypervisor test compressed raw image',
                '/builds/v*/seapath-v*-observer-efi-image.rootfs.spdx.json': 'SEAPATH Yocto flavor observer SPDX SBOM',
                '/builds/v*/seapath-v*-observer-efi-image.rootfs.swu': 'SEAPATH Yocto flavor observer update file',
                '/builds/v*/seapath-v*-observer-efi-image.rootfs.wic.bmap': 'SEAPATH Yocto flavor observer bmap file',
                '/builds/v*/seapath-v*-observer-efi-image.rootfs.wic.gz': 'SEAPATH Yocto flavor observer compressed raw image',
                '/builds/v*/v*.xml': 'SEAPATH Yocto flavor repo manifest',
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
