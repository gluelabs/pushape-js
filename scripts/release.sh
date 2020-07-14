#!/bin/bash

# current Git branch
branch=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')

# patch, minor, major
release=$1

# establish branch and tag name variables
devBranch=develop
masterBranch=master
releaseBranch=release/$versionLabel

# create the release branch from the -develop branch
git checkout -b $releaseBranch $devBranch

npm version $release -no-git-tag-version

version=${npm show ./ version}

# commit version number increment
git commit -am "build: release $version"

npm run changelog

# merge release branch with the new version number into master
git checkout $masterBranch
git merge --no-ff $releaseBranch

# create tag for new version from -master
git tag $versionLabel

# merge release branch with the new version number back into develop
git checkout $devBranch
git merge --no-ff $releaseBranch

# remove release branch
git branch -d $releaseBranch
