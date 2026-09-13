# reposentry-codefix-testbed

A tiny fixture repo with a few intentionally planted issues - a hardcoded
secret, a curl-pipe-to-shell install step, an exfiltration-looking webhook
call, a path traversal file read, and a vulnerable dependency
(`lodash@4.17.15`) - used only to test RepoSentry's automated fix-PR
features ("generate code fixes" for the code issues, "push a fix PR" for
the dependency). Not a real application.
