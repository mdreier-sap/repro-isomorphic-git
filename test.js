sap.ui.define(["sap/ui/test/autowaiter/_promiseWaiter"], function() {
    return {
        init: function() {
            const fs = new window.dependencies.LightningFS("unittest", {wipe: true});
            const git = window.dependencies.git;
            const dir = "/demo/mockusera@example.com/repoA";

            return git.init({
                fs,
                dir,
                defaultBranch: "main"
            })
            .then(() => git.setConfig({fs, dir, path: "user.name", value: "mockusera"}))
            .then(() => git.setConfig({fs, dir, path: "user.email", value: "unittest-setup@example.com"}))
            .then(() => alert("Test successful"));
        }
    };
    
});