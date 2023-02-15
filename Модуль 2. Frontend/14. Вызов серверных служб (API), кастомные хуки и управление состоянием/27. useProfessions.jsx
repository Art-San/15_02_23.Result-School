// На 05:59 необходимо обернуть <Switch> в <ProfessionProvider>, 
// так как в <Switch> могут находиться только <Route> и <Redirect> 
// (документация). Это исправляется в следующем уроке.

Корректный код:

<div>
    <Navbar />
    <ProfessionProvider>
        <Switch>
            <Route path="/users/:userId?/:edit?" component="{Users}" />
            <Route path="/login/:type?" component="{Login}" />
            <Route path="/" exact="" component="{Main}" />
            <Redirect to="/" />
        </Switch>
    </ProfessionProvider>
    <ToastContainer />
</div>

// На 12:29 React необходимо импортировать из 'react'. Необходимо написать import React from "react";  
// Также удали все console.log() в Profession.jsx