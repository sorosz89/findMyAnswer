searchForTerm(term, searchButton, rememberTimestamp) {
    return this.typeSearchTerm(term).then(() => {
        if (rememberTimestamp) {
            this.storeSearchTimestampInMemory()
        }
        return this.execute(searchButton);
    })
}

typeSearchTerm(term) {
    return this.searchInput.searchBar.typeSearchTerm(term);
}

pressEnter() {
    browser.typeKeys(protractor.Key.ENTER, 1);
    return this.searchResultList.waitForFirstSearchResult();
}

execute(searchButton) {
    return searchButton ? this.clickSearchButton() : this.pressEnter();
}