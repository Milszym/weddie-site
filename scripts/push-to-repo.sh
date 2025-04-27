#!/bin/bash

# REQUIREMENTS:
# - gh (GitHub CLI) installed and authenticated
# - git installed

echo "Push to dedicated repo - pre-push script"

# Get the current branch name
current_branch=$(git rev-parse --abbrev-ref HEAD)

if [ "$current_branch" = "main" ]; then
  echo "You're on 'main' branch. Skipping push to the other repo."
  exit 0
fi

echo "On branch '$current_branch'. Proceeding with push to other repo."

# Settings
ORG_NAME="Milszym"

# 1. Get the current branch name
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
REPO_NAME="$BRANCH_NAME"

echo "Current branch: $BRANCH_NAME"
echo "New repository name will be: $REPO_NAME"

# 2. Check if repo exists
echo "Checking if repository '$REPO_NAME' exists in organization '$ORG_NAME'..."

if gh repo view "$ORG_NAME/$REPO_NAME" > /dev/null 2>&1; then
  echo "Repository already exists. Skipping creation."
else
  echo "Repository does not exist. Creating it..."
  gh repo create "$ORG_NAME/$REPO_NAME" --public --confirm
fi

# 3. Add new remote and push current branch
echo "Setting remote URL and pushing code..."

# Add new remote (if it doesn't exist yet)
if ! git remote | grep -q "$REPO_NAME"; then
  git remote add "$REPO_NAME" "https://github.com/$ORG_NAME/$REPO_NAME.git"
fi

# Push current branch to the new repository
git push "$REPO_NAME" "$BRANCH_NAME:main" --force --no-verify

echo "Done!"