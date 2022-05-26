# Tsushima production

## [live site](https://tsushima-corporation.web.app/)

### features

- website of a bike/bycicle parts manufacturer comapany. Website contains home, dashboard and blog page. any user on the internet can access the website and see the parts on home page. however, parts can be ordered only after login.

- authentication : user and admin based routing. admin can not purchase product and can not review himself. on other hand user can not access admin panel.userjwt and admin jwt added for that. if any user or admin watn to access unauthorized route he will be redirect to home page.

- dashboard feature: logged in uesr can access dashboard with limited route. can rate us, see ordered parts. Admin can not access this routes. but admin can manage orders, parts and user. Admin can confirm shipping if user pay for the parts.

- ux feature : added modal where needed, tried to achieve material design, maintain color combination and responsiveness. added table for admin panel which is handy for mobile view also

- other features : added extra two sections on home page. one section is for premium membership. an user can get premium membership by submiting their email, but an user need to login atleast once in our website to get premium membership. Another section is faq. this is nothing fancy. just some frequently asked question from users.
