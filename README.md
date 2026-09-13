# reposentry-codefix-testbed

A tiny fixture repo with a few intentionally planted, non-dependency code
issues (a hardcoded secret, a curl-pipe-to-shell install step, an
exfiltration-looking webhook call, and a path traversal file read) - used
only to test RepoSentry's automated "generate code fixes" PR feature. Not a
real application.
