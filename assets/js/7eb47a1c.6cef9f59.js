"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1831],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),u=function(e){return function(n){var t=d(n.components);return a.createElement(e,o({},n,{components:t}))}},d=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(c.Provider,{value:n},e.children)},f="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,f=u["".concat(s,".").concat(m)]||u[m]||h[m]||o;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[f]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},77920:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={id:"starlark",title:"starlark"},s=void 0,i={unversionedId:"users/commands/starlark",id:"users/commands/starlark",title:"starlark",description:"These are the flags/commands under buck2 starlark and their --help output:",source:"@site/../docs/users/commands/starlark.generated.md",sourceDirName:"users/commands",slug:"/users/commands/starlark",permalink:"/docs/users/commands/starlark",draft:!1,tags:[],version:"current",frontMatter:{id:"starlark",title:"starlark"},sidebar:"manualSidebar",previous:{title:"server",permalink:"/docs/users/commands/server"},next:{title:"status",permalink:"/docs/users/commands/status"}},l={},c=[{value:"buck starlark",id:"buck-starlark",level:2},{value:"buck starlark debug-attach",id:"buck-starlark-debug-attach",level:3},{value:"buck starlark lint",id:"buck-starlark-lint",level:3},{value:"buck starlark typecheck",id:"buck-starlark-typecheck",level:3}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"These are the flags/commands under ",(0,r.mdx)("inlineCode",{parentName:"p"},"buck2 starlark")," and their ",(0,r.mdx)("inlineCode",{parentName:"p"},"--help")," output:"),(0,r.mdx)("h2",{id:"buck-starlark"},"buck starlark"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},'buck2-release-starlark \nRun Starlark operations\n\nUSAGE:\n    buck2-release starlark [OPTIONS] <SUBCOMMAND>\n\nOPTIONS:\n        --client-metadata <CLIENT_METADATA>\n            Metadata key-value pairs to inject into Buck2\'s logging. Client metadata must be of the\n            form `key=value`, where `key` is a snake_case identifier, and will be sent to backend\n            datasets\n\n    -h, --help\n            Print help information\n\n        --oncall <ONCALL>\n            The oncall executing this command\n\n    -v, --verbose <VERBOSITY>\n            How verbose buck should be while logging.\n            \n            Values: 0 = Quiet, errors only; 1 = Show status. Default; 2 = more info about errors; 3\n            = more info about everything; 4 = more info about everything + stderr;\n            \n            It can be combined with specific log items (stderr, full_failed_command, commands,\n            actions, status, stats, success) to fine-tune the verbosity of the log. Example usage\n            "-v=1,stderr"\n            \n            [default: 1]\n\nSUBCOMMANDS:\n    debug-attach\n            Run the starlark debug adapter protocol server\n    help\n            Print this message or the help of the given subcommand(s)\n    lint\n            Run the Starlark linter.\n    typecheck\n            Run the Starlark typechecker.\n\n')),(0,r.mdx)("h3",{id:"buck-starlark-debug-attach"},"buck starlark debug-attach"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},"buck2-release-starlark-debug-attach \nRun the starlark debug adapter protocol server\n\nThis forwards requests received on stdin to a debug server running in the buck daemon. DAP events\nand responses are returned from the daemon and sent to this command's stdout.\n\nUSAGE:\n    buck2-release starlark debug-attach [OPTIONS]\n\nOPTIONS:\n    -c, --config <SECTION.OPTION=VALUE>\n            List of config options\n\n        --client-metadata <CLIENT_METADATA>\n            Metadata key-value pairs to inject into Buck2's logging. Client metadata must be of the\n            form `key=value`, where `key` is a snake_case identifier, and will be sent to backend\n            datasets\n\n        --config-file <PATH>\n            List of config file paths\n\n        --disable-starlark-types\n            Disable runtime type checking in Starlark interpreter.\n            \n            This option is not stable, and can be used only locally to diagnose evaluation\n            performance problems.\n\n        --event-log <PATH>\n            Write events to this log file\n\n        --exit-when-different-state\n            Used for exiting a concurrent command when a different state is detected\n\n        --fake-arch <ARCH>\n            [possible values: default, aarch64, x8664]\n\n        --fake-host <HOST>\n            [possible values: default, linux, macos, windows]\n\n        --fake-xcode-version <VERSION-BUILD>\n            Value must be formatted as: version-build (e.g., 14.3.0-14C18 or 14.1-14B47b)\n\n    -h, --help\n            Print help information\n\n    -m, --modifier <VALUE>\n            A configuration modifier to configure all targets on the command line. This may be a\n            constraint value target.\n\n        --oncall <ONCALL>\n            The oncall executing this command\n\n        --reuse-current-config\n            Re-uses any `--config` values (inline or via modefiles) if there's a previous command,\n            otherwise the flag is ignored.\n            \n            If there is a previous command and `--reuse-current-config` is set, then the old config\n            is used, ignoring any overrides.\n            \n            If there is no previous command but the flag was set, then the flag is ignored, the\n            command behaves as if the flag was not set at all.\n\n        --skip-targets-with-duplicate-names\n            If there are targets with duplicate names in `BUCK` file, skip all the duplicates but\n            the first one. This is a hack for TD. Do not use this option\n\n        --stack\n            Record or show target call stacks.\n            \n            Starlark call stacks will be included in duplicate targets error.\n            \n            If a command outputs targets (like `targets` command), starlark call stacks will be\n            printed after the targets.\n\n        --target-platforms <PLATFORM>\n            Configuration target (one) to use to configure targets\n\n        --unstable-write-invocation-record <PATH>\n            Write the invocation record (as JSON) to this path. No guarantees whatsoever are made\n            regarding the stability of the format\n\n    -v, --verbose <VERBOSITY>\n            How verbose buck should be while logging.\n            \n            Values: 0 = Quiet, errors only; 1 = Show status. Default; 2 = more info about errors; 3\n            = more info about everything; 4 = more info about everything + stderr;\n            \n            It can be combined with specific log items (stderr, full_failed_command, commands,\n            actions, status, stats, success) to fine-tune the verbosity of the log. Example usage\n            \"-v=1,stderr\"\n            \n            [default: 1]\n\n        --write-build-id <PATH>\n            Write command invocation id into this file\n\n")),(0,r.mdx)("h3",{id:"buck-starlark-lint"},"buck starlark lint"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},"buck2-release-starlark-lint \nRun the Starlark linter.\n\nUSAGE:\n    buck2-release starlark lint [OPTIONS] <PATH>...\n\nARGS:\n    <PATH>...\n            \n\nOPTIONS:\n    -c, --config <SECTION.OPTION=VALUE>\n            List of config options\n\n        --client-metadata <CLIENT_METADATA>\n            Metadata key-value pairs to inject into Buck2's logging. Client metadata must be of the\n            form `key=value`, where `key` is a snake_case identifier, and will be sent to backend\n            datasets\n\n        --config-file <PATH>\n            List of config file paths\n\n        --console <super|simple|...>\n            Which console to use for this command\n            \n            [env: BUCK_CONSOLE=]\n            [default: auto]\n            [possible values: simple, simplenotty, simpletty, super, auto, none]\n\n        --disable-starlark-types\n            Disable runtime type checking in Starlark interpreter.\n            \n            This option is not stable, and can be used only locally to diagnose evaluation\n            performance problems.\n\n        --event-log <PATH>\n            Write events to this log file\n\n        --exit-when-different-state\n            Used for exiting a concurrent command when a different state is detected\n\n        --fake-arch <ARCH>\n            [possible values: default, aarch64, x8664]\n\n        --fake-host <HOST>\n            [possible values: default, linux, macos, windows]\n\n        --fake-xcode-version <VERSION-BUILD>\n            Value must be formatted as: version-build (e.g., 14.3.0-14C18 or 14.1-14B47b)\n\n    -h, --help\n            Print help information\n\n    -m, --modifier <VALUE>\n            A configuration modifier to configure all targets on the command line. This may be a\n            constraint value target.\n\n        --no-interactive-console\n            Disable console interactions\n            \n            [env: BUCK_NO_INTERACTIVE_CONSOLE=]\n\n        --oncall <ONCALL>\n            The oncall executing this command\n\n        --reuse-current-config\n            Re-uses any `--config` values (inline or via modefiles) if there's a previous command,\n            otherwise the flag is ignored.\n            \n            If there is a previous command and `--reuse-current-config` is set, then the old config\n            is used, ignoring any overrides.\n            \n            If there is no previous command but the flag was set, then the flag is ignored, the\n            command behaves as if the flag was not set at all.\n\n        --skip-targets-with-duplicate-names\n            If there are targets with duplicate names in `BUCK` file, skip all the duplicates but\n            the first one. This is a hack for TD. Do not use this option\n\n        --stack\n            Record or show target call stacks.\n            \n            Starlark call stacks will be included in duplicate targets error.\n            \n            If a command outputs targets (like `targets` command), starlark call stacks will be\n            printed after the targets.\n\n        --target-platforms <PLATFORM>\n            Configuration target (one) to use to configure targets\n\n        --ui <UI>\n            Configure additional superconsole ui components.\n            \n            Accepts a comma-separated list of superconsole components to add. Possible values are:\n            \n            dice - shows information about evaluated dice nodes debugevents - shows information\n            about the flow of events from buckd\n            \n            These components can be turned on/off interactively. Press 'h' for help when\n            superconsole is active.\n            \n            [possible values: dice, debugevents, io, re]\n\n        --unstable-write-invocation-record <PATH>\n            Write the invocation record (as JSON) to this path. No guarantees whatsoever are made\n            regarding the stability of the format\n\n    -v, --verbose <VERBOSITY>\n            How verbose buck should be while logging.\n            \n            Values: 0 = Quiet, errors only; 1 = Show status. Default; 2 = more info about errors; 3\n            = more info about everything; 4 = more info about everything + stderr;\n            \n            It can be combined with specific log items (stderr, full_failed_command, commands,\n            actions, status, stats, success) to fine-tune the verbosity of the log. Example usage\n            \"-v=1,stderr\"\n            \n            [default: 1]\n\n        --write-build-id <PATH>\n            Write command invocation id into this file\n\n")),(0,r.mdx)("h3",{id:"buck-starlark-typecheck"},"buck starlark typecheck"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},"buck2-release-starlark-typecheck \nRun the Starlark typechecker.\n\nUSAGE:\n    buck2-release starlark typecheck [OPTIONS] <PATH>...\n\nARGS:\n    <PATH>...\n            \n\nOPTIONS:\n    -c, --config <SECTION.OPTION=VALUE>\n            List of config options\n\n        --client-metadata <CLIENT_METADATA>\n            Metadata key-value pairs to inject into Buck2's logging. Client metadata must be of the\n            form `key=value`, where `key` is a snake_case identifier, and will be sent to backend\n            datasets\n\n        --config-file <PATH>\n            List of config file paths\n\n        --console <super|simple|...>\n            Which console to use for this command\n            \n            [env: BUCK_CONSOLE=]\n            [default: auto]\n            [possible values: simple, simplenotty, simpletty, super, auto, none]\n\n        --disable-starlark-types\n            Disable runtime type checking in Starlark interpreter.\n            \n            This option is not stable, and can be used only locally to diagnose evaluation\n            performance problems.\n\n        --event-log <PATH>\n            Write events to this log file\n\n        --exit-when-different-state\n            Used for exiting a concurrent command when a different state is detected\n\n        --fake-arch <ARCH>\n            [possible values: default, aarch64, x8664]\n\n        --fake-host <HOST>\n            [possible values: default, linux, macos, windows]\n\n        --fake-xcode-version <VERSION-BUILD>\n            Value must be formatted as: version-build (e.g., 14.3.0-14C18 or 14.1-14B47b)\n\n    -h, --help\n            Print help information\n\n    -m, --modifier <VALUE>\n            A configuration modifier to configure all targets on the command line. This may be a\n            constraint value target.\n\n        --no-interactive-console\n            Disable console interactions\n            \n            [env: BUCK_NO_INTERACTIVE_CONSOLE=]\n\n        --oncall <ONCALL>\n            The oncall executing this command\n\n        --reuse-current-config\n            Re-uses any `--config` values (inline or via modefiles) if there's a previous command,\n            otherwise the flag is ignored.\n            \n            If there is a previous command and `--reuse-current-config` is set, then the old config\n            is used, ignoring any overrides.\n            \n            If there is no previous command but the flag was set, then the flag is ignored, the\n            command behaves as if the flag was not set at all.\n\n        --skip-targets-with-duplicate-names\n            If there are targets with duplicate names in `BUCK` file, skip all the duplicates but\n            the first one. This is a hack for TD. Do not use this option\n\n        --stack\n            Record or show target call stacks.\n            \n            Starlark call stacks will be included in duplicate targets error.\n            \n            If a command outputs targets (like `targets` command), starlark call stacks will be\n            printed after the targets.\n\n        --target-platforms <PLATFORM>\n            Configuration target (one) to use to configure targets\n\n        --ui <UI>\n            Configure additional superconsole ui components.\n            \n            Accepts a comma-separated list of superconsole components to add. Possible values are:\n            \n            dice - shows information about evaluated dice nodes debugevents - shows information\n            about the flow of events from buckd\n            \n            These components can be turned on/off interactively. Press 'h' for help when\n            superconsole is active.\n            \n            [possible values: dice, debugevents, io, re]\n\n        --unstable-write-invocation-record <PATH>\n            Write the invocation record (as JSON) to this path. No guarantees whatsoever are made\n            regarding the stability of the format\n\n    -v, --verbose <VERBOSITY>\n            How verbose buck should be while logging.\n            \n            Values: 0 = Quiet, errors only; 1 = Show status. Default; 2 = more info about errors; 3\n            = more info about everything; 4 = more info about everything + stderr;\n            \n            It can be combined with specific log items (stderr, full_failed_command, commands,\n            actions, status, stats, success) to fine-tune the verbosity of the log. Example usage\n            \"-v=1,stderr\"\n            \n            [default: 1]\n\n        --write-build-id <PATH>\n            Write command invocation id into this file\n\n")))}d.isMDXComponent=!0}}]);