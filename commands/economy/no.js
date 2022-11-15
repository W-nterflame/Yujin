module.exports = {
    name: "balance",
    aliases: ["bal", "inv", "inventory"],
    code: `
    $author[1;$username[$findUser[$message;yes]];$userAvatar[$findUser[$message;yes]];]

    $title[Inventory:]
    $description[
        \`$getGlobalUserVar[coin]\` <:woncoin:972807458986790922> **Woncoins**]
    $footer[anotehrefja]
    `

    
}