module.exports = {
    name: "rep",
    aliases: ["+"],
    code:`
    $author[1;$username[$findUser[$message;no]];$userAvatar[$findUser[$message;no]];]
    $description[You gave $username[$findUser[$message;no]] a rep!  \`$getGlobalUserVar[rep;$findUser[$message;no]]\` → \`$sum[1;$getGlobalUserVar[rep;$findUser[$message;no]]]\` rep]
    $setGlobalUserVar[rep;$sum[1;$getGlobalUserVar[rep;$findUser[$message;no]]];$findUser[$message;no]]
    $color[2f3136]
    $cooldown[1h;You can rep again in %hour%h %min%m %sec%s]
    `
}