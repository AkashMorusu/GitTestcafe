import { Selector } from "testcafe";
  
fixture `Getting started with Github testing`
    .page `https://github.com/`

test('Testing github signin page',async t=>{
    const sign_button=Selector('a').withAttribute('href','/login')
    const message=Selector('h1').innerText
    const user_input=Selector('#login_field')
    const passord_input=Selector('#password')
    const submit_button=Selector('input').withAttribute('value','Sign in')
    const Repo_message=Selector('h2').innerText
    const profile=Selector('summary').withAttribute('aria-label','View profile and more')
    const select_repository=Selector('a').withText('Your repositories')
    const new_repository=Selector('a.text-center.btn.btn-primary.ml-3')
    const Repository_name=Selector('#repository_name')
    const Repository_description=Selector('#repository_description')
    const Repository_type=Selector('#repository_visibility_public')
    const initialize_repo=Selector('#repository_auto_init')
    const create_repository=Selector('button').withText('Create repository')
    const para=Selector('p.f4.my-3').innerText
    const setting=Selector('#settings-tab')
    const delete_repository=Selector('summary').withText('Delete this repository')
    const name='GitTest'
    const delete_input=Selector('input.form-control.input-block')
    const delete_button=Selector('span').withText('I understand the consequences, delete this repository')
    await t.click(sign_button)
    await t.expect(message).contains('Sign in to GitHub')
    await t.typeText(user_input,'akashmorusu@gmail.com')
    await t.typeText(passord_input,'RAMAkrishna@7')
    await t.click(submit_button)
    await t.expect(Repo_message).contains('Recent Repositories')
    await t.click(profile)
    await t.click(select_repository)
    await t.click(new_repository)
    await t.typeText(Repository_name,name)
    await t.typeText(Repository_description,'Automating Git test using testcafe')
    await t.click(Repository_type)
    await t.expect(Repository_type.checked).ok()
    await t.click(initialize_repo)
    await t.click(create_repository)
    await t.expect(para).contains('Automating Git test using testcafe')
    await t.click(setting)
    await t.click(delete_repository)
    //await t.expect(Selector('div').innerText).contains('Are you absolutely sure?')
    //await t.typeText(delete_input,`AkashMorusu/${name}`)
    //await t.click(delete_button)
})