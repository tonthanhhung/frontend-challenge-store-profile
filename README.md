## Store Profile Management

### TODO

- [x] Implement UI base on Mockup, mock data, edit store profile with api call
- [x] UI Responsive
- [x] Store’s name and RedInvoice’s name (company name in red invoice) will have server side validation of uniqueness
- [x] City and District is select from a predefined list of valid address. Phone number should be validate with regex
- [x] When user select an image to upload, the image should be upload to server immediately and get back an url of the uploaded image. The url then will be used to update Store’s logo url if user submit the form. If the user doesn’t submit the form, we don’t have to worry about deleting the uploaded image, it will automatically be deleted after a day if not in used
- [x] After the logo image uploaded, it should show a preview logo.
- [x] If the phone number is in invalid format, the form will not be allowed to submit.
- [x] If the server return update error, show it with a toaster

### Evaluation

Require techs:

- [x] React
- [x] Redux
- [x] Redux-saga
- [ ] Unit test with jest

Nice to have

- [ ] End to end test

Please suggest if you found any improvements that we should make on the design

### How to use

- Start developement (JsonServer mock api and web app)

```
    $ yarn start
```

- Build web app (without JsonServer included)

```
    $ yarn build
```

- Deployment to [Now](https://zeit.co/docs#install-now-cli)
