const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')
function run(){
    const bucket = core.getInput('bucket', {required: true})
    const bucketRegion = core.getInput('region', {required: true})
    const distFolder = core.getInput('dist-folder', {required: true})
    const s3Uri = `s3://${bucket}`


    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`)

}

run()