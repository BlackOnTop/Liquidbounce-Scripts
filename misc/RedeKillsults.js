/// api_version=2
var script = registerScript({
    name: "RedeKillsults",
    version: "1.0",
    authors: ["chocopie"]
});

var S02PacketChat = Java.type("net.minecraft.network.play.server.S02PacketChat");

var msgs = [
	"%name kys",
	"%name dumb nigger kill yourself",
	"fucking trash LLLLLL ez kys",
    "WTF SIGMA HATAR ALERT!!!!!!! SIGMA HATAR DETECTED!!! REMOVED SIGMA HATAR FROM THE GAME",
    "%name black nigger stupid cunt kill yourself",
    "%name free sigma client download 2014 punjabi sex poop",
    "%name I got your IP Address",
    "%name config issues"
];

script.registerModule({
    name: "RedeKillsults",
    category: "Fun", 
    description: "novo line",
	tag: "novo line",
	
}, function (module) {
    module.on("packet", function(event) {
        var packet = event.getPacket()
        if (packet instanceof S02PacketChat) {
			var msg = packet.getChatComponent().getUnformattedText();
			if (msg.contains("foi morto por "+mc.thePlayer.getName())) {
				mc.thePlayer.sendChatMessage(getMessage(msg.split(" ")[0]))
			}
		}
    });
});

function getMessage(replacement) {
    return msgs[randInt(0,msgs.length-1)].replaceAll("%name",replacement)
}

function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}
