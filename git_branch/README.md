
# git branching


## Today we are going to

- Review git branching
- Identify some issues with our example
  - make it editable via [DOM actions](https://github.com/stevenaeola/gitpitch/blob/master/prog/js_dom/README.md)
- Work on the issue(s) one at a time in groups
- Make pull requests
- Merge in the pull requests



# Choose some issues


## git revisited: basic branching

- create a branch with `git branch iss52`
- check it out with `git checkout iss52`
- do some work, `add` and `commit`
- go back to the main branch: `git checkout main`
- merge your branch: `git merge iss52`
- delete your branch: `git branch -d iss52`


## What is the point of all that?

- Different people can work on different features
- Before merging you can update with `git pull`
- Automatically merges and identifies issues
- See also [`git rebase`](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)


## Working with multiple remotes/branches

- Common open source model 
  - you don't have permission to push directly
- Fork the repo at github (c.f. clone to local)
- clone your forked repo into your local machine
- add the original as upstream repo with [set remote](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork)
- you can `git push` and `git pull` with your forked repo
- you can only `git pull` with your upstream repo


## Let's do it: set up

- One of you operate the keyboard and share screen
- Fork, clone and set upstream remote
- This may go horribly wrong: embrace failure!


## Let's do it: repeat 

- Create an issue branch (numbered with github issue number)
- Change your local code to address the issue
- Add and commit your change (to the issue branch)
  - Do not merge your issue branch into main
- push your branch to forked repo `git push origin issNN`
- on github [make a pull request (PR)](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)
  - from the issue branch on your fork
  - to the master branch on the upstream repo


# Select a PR to be merged


## Let's do it again

- If your PR wasn't chosen you might want to remove that branch
- Switch to master `git checkout master`
- Pull the changes from upstream
  - `git pull upstream`
- Repeat new issue branch/commit/push/PR


