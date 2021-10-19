# git branching {data-background-color=#7E317B}

---

## Today we are going to

::: incremental

- Identify some issues with our example
- Work on the issue(s) one at a time in groups
- Make pull requests
- Merge in the pull requests
- Review git branching

:::

---

# Choose some issues

---



---

## Working with multiple remotes/branches

::: incremental 

- Common open source model 
  - you don't have permission to push directly
- Fork the repo at github (c.f. clone to local)
- clone your forked repo into your local machine
- add the original as upstream repo with [set remote](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork)
- you can `git push` and `git pull` with your forked repo
- you can only `git pull` with your upstream repo

:::

---

## An example

::: incremental

I use [node-red](https://nodered.org/) for [music](https://flows.nodered.org/node/node-red-contrib-music)
- Users can contribute custom nodes
- I wanted to have a weighted random distribution
- But somebody else had already built a [node for randomising](https://flows.nodered.org/node/node-red-contrib-random-output)
- So [I asked if they would accept a pull request](https://github.com/lutzer/node-red-contrib-random-output/issues/1)
- Then I [forked their repo](https://github.com/stevenaeola/node-red-contrib-random-output)
- And I [made a pull request](https://github.com/lutzer/node-red-contrib-random-output/pull/2)

:::

---
## Let's do it: set up

- One of you operate the keyboard and share screen
- Fork the [goats](https://github.com/stevenaeola/goats), clone and set upstream remote
- This may go horribly wrong: embrace failure!

--- 

## Let's do it: repeat 

- Create/choose an issue on github
- Change your local code to address the issue
- Add and commit your change (to main branch)
- push your branch to forked repo `git push origin main`
- on github [make a pull request (PR)](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)
  - from the main branch on your fork
  - to the main branch on the upstream repo

---

# Select a PR to be merged

---

## git revisited: basic branching

::: incremental

- good for when you're working on more than issue
- create a branch with `git branch iss52`
- check it out with `git checkout iss52`
- do some work, `add` and `commit`
- go back to the main branch: `git checkout main`
- merge your branch: `git merge iss52`
- delete your branch: `git branch -d iss52`

:::

---

## Let's do it again

- Create an issue branch (numbered with github issue number)
- Change your local code to address the issue
- Add and commit your change (to the issue branch)
  - Do not merge your issue branch into main
- push your branch to forked repo `git push origin issNN`
- on github [make a pull request (PR)](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)
  - from the issue branch on your fork
  - to the main branch on the upstream repo

---

## And then ...

If your PR is accepted
- Switch to main `git checkout main`
- Pull the changes from upstream
  - `git pull upstream`
- Repeat new issue branch/commit/push/PR
When your PR is accepted/rejected
- you might want to remove that branch

---

## What is the point of all that?

- Different people can work on different features
- Before merging you can update with `git pull`
- Automatically merges and identifies issues
- See also [`git rebase`](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)



