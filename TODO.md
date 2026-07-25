# TODO

- [ ] Create, stage, and commit a `.git-blame-ignore-revs` file in the root directory.
- [ ] Configure Git to use this file for `git blame` in this repository.
- [ ] Evaluate which commits should be ignored (e.g., bulk formatting) by running `git log --oneline --grep="^style"`.
- [ ] Add the chosen commits to the `.git-blame-ignore-revs` file.

## Pro-Tip: Automate the file creation

Instead of looking up the full hashes manually, you can generate the `.git-blame-ignore-revs` file and format it exactly how your `gbignore` function does (with the title as a comment above the hash) by running this single command:

```sh
git log --grep="^style" --format="# %s%n%H%n" > .git-blame-ignore-revs
```

Once the file is generated, you can manually open it, delete any commits you *don't* want to ignore (like the typo fix, if you want to retain blame for that line), and then configure your repo to use it:

```sh
git config blame.ignoreRevsFile .git-blame-ignore-revs
```
