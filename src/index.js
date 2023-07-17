const LightningFS = require('@isomorphic-git/lightning-fs');
const git = require('isomorphic-git');
const http = require('isomorphic-git/http/web');
const markdownIt = require('markdown-it');
const { Octokit } = require('octokit');

window.dependencies = {
    LightningFS,
    git,
    http,
    markdownIt,
    Octokit
}