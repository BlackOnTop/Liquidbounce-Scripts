String.prototype.includes = function (t, e) { "use strict"; return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e) };
var GL11 = Java.type("org.lwjgl.opengl.GL11"); function drawRect(L, G, l, g, _) { var e = (_ >> 24 & 255) / 255, a = (_ >> 16 & 255) / 255, E = (_ >> 8 & 255) / 255, r = (255 & _) / 255; GL11.glEnable(GL11.GL_BLEND), GL11.glDisable(GL11.GL_TEXTURE_2D), GL11.glBlendFunc(GL11.GL_SRC_ALPHA, GL11.GL_ONE_MINUS_SRC_ALPHA), GL11.glEnable(GL11.GL_LINE_SMOOTH), GL11.glPushMatrix(), GL11.glColor4f(a, E, r, e), GL11.glBegin(GL11.GL_TRIANGLE_FAN), GL11.glVertex2d(l, G), GL11.glVertex2d(L, G), GL11.glVertex2d(L, g), GL11.glVertex2d(l, g), GL11.glEnd(), GL11.glPopMatrix(), GL11.glEnable(GL11.GL_TEXTURE_2D), GL11.glDisable(GL11.GL_BLEND), GL11.glDisable(GL11.GL_LINE_SMOOTH), GL11.glColor4f(1, 1, 1, 1) } function drawCircle(L, G, l, g) { var _ = (g >> 24 & 255) / 255, e = (g >> 16 & 255) / 255, a = (g >> 8 & 255) / 255, E = (255 & g) / 255; GL11.glColor4f(e, a, E, _), GL11.glEnable(GL11.GL_BLEND), GL11.glDisable(GL11.GL_TEXTURE_2D), GL11.glBlendFunc(GL11.GL_SRC_ALPHA, GL11.GL_ONE_MINUS_SRC_ALPHA), GL11.glEnable(GL11.GL_LINE_SMOOTH), GL11.glPushMatrix(), GL11.glLineWidth(1), GL11.glBegin(GL11.GL_POLYGON); for (var r = 0; r <= 360; r++)GL11.glVertex2d(L + Math.sin(r * Math.PI / 180) * l, G + Math.cos(r * Math.PI / 180) * l); GL11.glEnd(), GL11.glPopMatrix(), GL11.glEnable(GL11.GL_TEXTURE_2D), GL11.glDisable(GL11.GL_BLEND), GL11.glDisable(GL11.GL_LINE_SMOOTH), GL11.glColor4f(1, 1, 1, 1) };
function httpGet(e) { var t = new java.net.URL(e).openConnection(); return t.requestMethod = "GET", asResponse(t) } function httpPost(e, t, n) { n = n || "application/json"; var a = new java.net.URL(e).openConnection(); return a.requestMethod = "POST", a.setRequestProperty("Content-Type", n), a.doOutput = !0, write(a.outputStream, t), asResponse(a) } function asResponse(e) { return { data: read(e.inputStream), statusCode: e.responseCode } } function write(e, t) { var n = new java.io.DataOutputStream(e); n.writeBytes(t), n.flush(), n.close() } function read(e) { for (var t, n = new java.io.BufferedReader(new java.io.InputStreamReader(e)), a = new java.lang.StringBuffer; null != (t = n.readLine());)a.append(t); return n.close(), a.toString() };
var globalScope = this, KeyBinding = Java.type("net.minecraft.client.settings.KeyBinding"), EnumFacing = Java.type("net.minecraft.util.EnumFacing"), Vec3 = Java.type("net.minecraft.util.Vec3"), minecraftUtils = function () { var e = {}, n = function (n) { var t; return !("string" != typeof n || !e.hasOwnProperty(n)) && (t = e[n][1], globalScope.hasOwnProperty(n) && globalScope[n] instanceof KeyBinding && globalScope[n].setKeyCode(0), e[n][0].setKeyCode(t), delete e[n], KeyBinding.resetKeyBindingArrayAndHash(), !0) }; return { hookKeyBind: function (t, o) { var i; if (!(t instanceof KeyBinding) || "string" != typeof o) return !1; globalScope.hasOwnProperty(o) && globalScope[o] instanceof KeyBinding || (globalScope[o] = new KeyBinding("key.hook_" + o, 0, "key.categories.misc")), e.hasOwnProperty(o) && n(o); for (var r = Object.keys(e), a = 0; a < r.length; a++)if (e[r[a]][0] == t) { n(r[a]); break } return 0 == (i = t.getKeyCode()) && (i = t.getKeyCodeDefault()), t.setKeyCode(0), globalScope[o].setKeyCode(i), e[o] = [t, i], KeyBinding.resetKeyBindingArrayAndHash(), !0 }, unhookKeyBind: n, unhookAllKeyBinds: function () { for (var t = Object.keys(e), o = 0; o < t.length; o++)n(t[o]); return !0 } } }(); function hookKeyBind(e, n) { return minecraftUtils.hookKeyBind(e, n) } function unhookKeyBind(e) { return minecraftUtils.unhookKeyBind(e) } function unhookAllKeyBinds() { return minecraftUtils.unhookAllKeyBinds() } function getCenterOfBlockSide(e, n) { var t = new Vec3(e).addVector(.5, .5, .5), o = new Vec3(n.getDirectionVec()); return t.addVector(.5 * o.xCoord, .5 * o.yCoord, .5 * o.zCoord) } function isBlockInReach(e, n) { var t = mc.playerController.getBlockReachDistance() + .25, o = e.getPositionEyes(1), i = getCenterOfBlockSide(n, getClosestBlockSide(o, n)); return o.distanceTo(i) <= t } function getClosestBlockSide(e, n) { var t, o, i, r, a, c = null; for (a in EnumFacing.values()) o = getCenterOfBlockSide(n, t = EnumFacing.values()[a]), i = e.distanceTo(o), (null == c || i < c) && (c = i, r = t); return r };
var Timer = Java.type("java.util.Timer"); function setInterval(e, n) { var t = new Timer("setInterval", !0); return t.schedule(function () { e() }, n, n), t } function clearInterval(e) { e.cancel() } function setTimeout(e, n) { var t = new Timer("setTimeout", !0); return t.schedule(function () { e() }, n), t } function clearTimeout(e) { e.cancel() };
var StringSelection = Java.type("java.awt.datatransfer.StringSelection"), ScaledResolution = Java.type("net.minecraft.client.gui.ScaledResolution"), Toolkit = Java.type("java.awt.Toolkit"); function copyToClipboard(t) { var e = new StringSelection(t); Toolkit.getDefaultToolkit().getSystemClipboard().setContents(e, null) } function getScaledWidth() { return new ScaledResolution(mc).getScaledWidth() } function getScaledHeight() { return new ScaledResolution(mc).getScaledHeight() };
Math.trunc = function (t) { return (t = +t) - t % 1 || (isFinite(t) && 0 !== t ? t < 0 ? -0 : 0 : t) }, Math.toRadians = function (t) { return t * Math.PI / 180 }, Math.toDegrees = function (t) { return 180 * t / Math.PI };

function randomize(min, max) {
    return (Math.random() * (max - min)) + min;
}
function getSpeed() {
    return Math.sqrt(mc.thePlayer.motionX * mc.thePlayer.motionX + mc.thePlayer.motionZ * mc.thePlayer.motionZ);
}

var scriptName = 'SuperKnock Recode';
var scriptVersion = 1.4;
var scriptAuthor = 'turtl';

var moduleString = 'SuperKnock';
var module = new SuperKnock();

var S02PacketChat = Java.type("net.minecraft.network.play.server.S02PacketChat");
var C01PacketChatMessage = Java.type("net.minecraft.network.play.client.C01PacketChatMessage");
var C02PacketUseEntity = Java.type("net.minecraft.network.play.client.C02PacketUseEntity");
var C0BPacketEntityAction = Java.type("net.minecraft.network.play.client.C0BPacketEntityAction");
var C06PacketPlayerPosLook = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook");
var C04PacketPlayerPosition = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition");
var C05PacketPlayerLook = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook");

var Keyboard = Java.type("org.lwjgl.input.Keyboard");
var System = Java.type('java.lang.System');
var NetworkInterface = Java.type('java.net.NetworkInterface');
var BufferedReader = Java.type("java.io.BufferedReader"), InputStreamReader = Java.type("java.io.InputStreamReader");
var DateTimeFormatter = Java.type("java.time.format.DateTimeFormatter");
var LocalDateTime = Java.type("java.time.LocalDateTime");
var URL = Java.type("java.net.URL");
var MalformedURLException = Java.type('java.net.MalformedURLException');
var IOException = Java.type('java.io.IOException');
var URLConnection = Java.type('java.net.URLConnection');

var moduleValues = [
    SuperKnock_mode = value.createList('Mode', ['Packet', 'Packet_W-Tap', 'W-Tap', 'SuperPacket'], 'Packet'),
    SuperKnock_hurtTime = value.createInteger('HurtTime', 10, 1, 10),
    SuperKnock_ticksDelay = value.createInteger('TicksDelay', 0, 0, 60),
    SuperKnock_noMove = value.createBoolean('NoMoveExploit', true),
    SuperKnock_wtapNoMoveExploit = value.createBoolean('W-TapNoMoveExploit', true),
    SuperKnock_noSprint = value.createBoolean('NoSprintExploit', true),
    SuperKnock_notSprintingSlowdown = value.createBoolean('NotSprintingSlowdown', true),
    SuperKnock_minDelay = value.createInteger('MinDelay[ms]', 45, 1, 1000),
    SuperKnock_maxDelay = value.createInteger('MaxDelay[ms]', 55, 1, 1000),
    SuperKnock_minDelayMulitplier = value.createFloat('MinDelayMultiplier', 2, 1.1, 3),
    SuperKnock_maxDelayMulitplier = value.createFloat('MaxDelayMultiplier', 2.3, 1.1, 3),
    SuperKnock_packetOverride = value.createBoolean('PacketOverride', true),
    SuperKnock_actionNeeds = value.createList("Actions", ['>', 'OnGround', 'InAir', 'Falling', 'GettingDamage', 'UsingItem'], '>'),
    SuperKnock_actionNeedsT = value.createText('Actions needs', '')
]

function cfg(mode,hurtTime,ticksDelay,noMove,wtapNoMove,noSprint,noSprintSlowdown,minDelay,maxDelay,minDelayMultipl,maxDelayMultipl,packetOverride) {
    SuperKnock_mode.set(mode);
    SuperKnock_hurtTime.set(hurtTime);
    SuperKnock_ticksDelay.set(ticksDelay);
    SuperKnock_noMove.set(noMove);
    SuperKnock_wtapNoMoveExploit.set(wtapNoMove);
    SuperKnock_noSprint.set(noSprint);
    SuperKnock_notSprintingSlowdown.set(noSprintSlowdown);
    SuperKnock_minDelay.set(minDelay);
    SuperKnock_maxDelay.set(maxDelay);
    SuperKnock_minDelayMulitplier.set(minDelayMultipl);
    SuperKnock_maxDelayMulitplier.set(maxDelayMultipl);
    SuperKnock_packetOverride.set(packetOverride);
}

if (SuperKnock_actionNeedsT.get() == "")
    var OnGround, InAir, Falling, GettingDamage, UsingItem = false;

function SuperKnock() {
    this.getName = function () {
        return 'SuperKnock';
    }
    this.getTag = function () {
        return SuperKnock_mode.get();
    }
    this.getDescription = function () {
        return 'Deals more knockback to entities';
    }
    this.getCategory = function () {
        return 'player';
    }
    this.addValues = function (values) {
        for (var i in moduleValues) {
            values.add(moduleValues[i]);
        }
    }

    this.onEnable = function () {
        knockTicks = 0;
        superKnock = false;
        needSprint = false;
        playerPos = [0, 0, 0];
    }

    this.onUpdate = function () {
        knockTicks = knockTicks > 0 ? knockTicks - 1 : knockTicks;
        if (SuperKnock_minDelay.get() > SuperKnock_maxDelay.get()) {
            SuperKnock_minDelay.set(SuperKnock_maxDelay.get());
        }
        if (SuperKnock_minDelayMulitplier.get() > SuperKnock_maxDelayMulitplier.get()) {
            SuperKnock_minDelayMulitplier.set(SuperKnock_maxDelayMulitplier.get());
        }
        switch (SuperKnock_actionNeeds.get().toLowerCase()) {
            case "onground":
                OnGround = !OnGround;
                SuperKnock_actionNeeds.set(">");
                break;
            case "inair":
                InAir = !InAir;
                SuperKnock_actionNeeds.set(">");
                break;
            case "falling":
                Falling = !Falling;
                SuperKnock_actionNeeds.set(">");
                break;
            case "gettingdamage":
                GettingDamage = !GettingDamage;
                SuperKnock_actionNeeds.set(">");
                break;
            case "usingitem":
                UsingItem = !UsingItem;
                SuperKnock_actionNeeds.set(">");
                break;
            case ">":
                if (SuperKnock_actionNeedsT.get() != null && !OnGround && !InAir && !Falling && !GettingDamage && !UsingItem) {
                    OnGround = SuperKnock_actionNeedsT.get().includes("OnGround");
                    InAir = SuperKnock_actionNeedsT.get().includes("InAir");
                    Falling = SuperKnock_actionNeedsT.get().includes("Falling");
                    GettingDamage = SuperKnock_actionNeedsT.get().includes("GettingDamage");
                    UsingItem = SuperKnock_actionNeedsT.get().includes("UsingItem");
                }
                SuperKnock_actionNeedsT.set((OnGround ? "\u00A7aOnGround\u00A78," : "") + (InAir ? "\u00A7bInAir\u00A78," : "") + (Falling ? "\u00A7cFalling\u00A78," : "") + (GettingDamage ? "\u00A7dGettingDamage\u00A78," : "") + (UsingItem ? "\u00A7eUsingItem\u00A78," : ""));
                break;
        }
    }

    this.onPacket = function (event) {
        if (event.getPacket() instanceof C01PacketChatMessage) {
            if (event.getPacket().getMessage()[0] == "#") {
                var msg = event.getPacket().getMessage().substring(1).toLowerCase();
                  switch (msg) {
                    case "aac":
                    case "ncp":
                    case "cubecraft":
                    case "hypixel":    
                    cfg("Packet",10,0,true,false,true,true,1,1,1,1,false);
                          chat.print("this preset has been set men)))");
                    break;
                    case "agc":
                    case "minemen":    
                    case "mineman":    
                        cfg("W-Tap", 10, 0, false, false, false, false, 30, 45, 1, 1.25, false);
                          chat.print("this preset has been set men)))");
                    break;
                    default:
                       chat.print("this preset doesnt exist men)))");
                    break;
                }
                event.cancelEvent();
            }
        }
        if ((event.getPacket() instanceof C06PacketPlayerPosLook || event.getPacket() instanceof C04PacketPlayerPosition || event.getPacket() instanceof C05PacketPlayerLook) && SuperKnock_packetOverride.get()) {
            if (event.getPacket().isMoving() === false && (mc.thePlayer.onGround || event.getPacket().onGround)) {
                event.getPacket().setMoving(true);
            }
        }
        if (event.getPacket() instanceof C02PacketUseEntity && event.getPacket().getAction() == C02PacketUseEntity.Action.ATTACK) {
            needs = SuperKnock_actionNeedsT.get();
            if (mc.thePlayer.onGround && !needs.includes("OnGround") || !mc.thePlayer.onGround && !mc.thePlayer.fallDistance && !needs.includes("InAir") || mc.thePlayer.fallDistance != 0 && !needs.includes("Falling)") || mc.thePlayer.hurtTime != 0 && !needs.includes(GettingDamage) || mc.thePlayer.getItemInUseDuration() != 0 && !needs.includes("UsingItem")) return;


            attackedEntity = event.getPacket().getEntityFromWorld(mc.theWorld);
            if (attackedEntity == null) {
                return;
            }
            superKnock = (mc.thePlayer.isSprinting() || SuperKnock_noSprint.get()) && (mc.thePlayer.movementInput.moveForward || mc.thePlayer.movementInput.moveStrafe || SuperKnock_noMove.get()) ? true : false;
            playerMove = (mc.thePlayer.movementInput.moveForward || mc.thePlayer.movementInput.moveStrafe) ? true : false;
            playerMove2 = mc.thePlayer.posX + mc.thePlayer.posZ - mc.thePlayer.lastTickPosX - mc.thePlayer.lastTickPosZ == 0 ? false : true;
            playerPos = [mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ];
            needSprint = mc.thePlayer.isSprinting() ? true : false;

            if (attackedEntity.hurtTime <= SuperKnock_hurtTime.get() && knockTicks <= SuperKnock_ticksDelay.get() && superKnock) {
                switch (SuperKnock_mode.get()) {
                    case "Packet":
                        if (!playerMove && SuperKnock_noMove.get()) {
                            if (!mc.thePlayer.isSprinting())
                                mc.thePlayer.setSprinting(true);

                            mc.thePlayer.motionX += -Math.sin(Math.toRadians(mc.thePlayer.rotationYaw)) * 1E-5;
                            mc.thePlayer.motionZ += Math.cos(Math.toRadians(mc.thePlayer.rotationYaw)) * 1E-5;
                        }

                        mc.thePlayer.sendQueue.addToSendQueue(new C0BPacketEntityAction(mc.thePlayer, C0BPacketEntityAction.Action.STOP_SPRINTING));
                        mc.thePlayer.sendQueue.addToSendQueue(new C0BPacketEntityAction(mc.thePlayer, C0BPacketEntityAction.Action.START_SPRINTING));

                        if (!needSprint) {
                            setTimeout(function () {
                                mc.thePlayer.sendQueue.addToSendQueue(new C0BPacketEntityAction(mc.thePlayer, C0BPacketEntityAction.Action.STOP_SPRINTING));
                                mc.thePlayer.setSprinting(false);
                            }, 1)
                        }
                        break;

                    case "Packet W-Tap":
                        if (!needSprint) {
                            mc.thePlayer.sendQueue.addToSendQueue(new C0BPacketEntityAction(mc.thePlayer, C0BPacketEntityAction.Action.START_SPRINTING));
                        }
                        setTimeout(function () {
                            mc.thePlayer.sendQueue.addToSendQueue(new C0BPacketEntityAction(mc.thePlayer, C0BPacketEntityAction.Action.STOP_SPRINTING));
                            if (SuperKnock_notSprintingSlowdown.get() && mc.thePlayer.isSprinting())
                                mc.thePlayer.setSprinting(false);
                        }, randomize(SuperKnock_minDelay, SuperKnock_maxDelay))
                        if (needSprint) setTimeout(function () {
                            mc.thePlayer.sendQueue.addToSendQueue(new C0BPacketEntityAction(mc.thePlayer, C0BPacketEntityAction.Action.START_SPRINTING));
                            if (SuperKnock_notSprintingSlowdown.get() && !mc.thePlayer.isSprinting())
                                mc.thePlayer.setSprinting(true);
                        }, randomize(SuperKnock_minDelay.get(), SuperKnock_maxDelay.get()) * randomize(SuperKnock_minDelayMulitplier.get(), SuperKnock_maxDelayMulitplier.get()));
                        break;

                    case "W-Tap":
                        if ((!playerMove || !playerMove2) && SuperKnock_wtapNoMoveExploit.get()) {
                            if (!needSprint) {
                                mc.thePlayer.sendQueue.addToSendQueue(new C0BPacketEntityAction(mc.thePlayer, C0BPacketEntityAction.Action.START_SPRINTING));
                            }
                            setTimeout(function () {
                                mc.thePlayer.sendQueue.addToSendQueue(new C0BPacketEntityAction(mc.thePlayer, C0BPacketEntityAction.Action.STOP_SPRINTING));
                                if (SuperKnock_notSprintingSlowdown.get() && !mc.thePlayer.isSprinting())
                                    mc.thePlayer.setSprinting(false);
                            }, randomize(SuperKnock_minDelay, SuperKnock_maxDelay))
                            if (needSprint) setTimeout(function () {
                                mc.thePlayer.sendQueue.addToSendQueue(new C0BPacketEntityAction(mc.thePlayer, C0BPacketEntityAction.Action.START_SPRINTING));
                                if (SuperKnock_notSprintingSlowdown.get())
                                    mc.thePlayer.setSprinting(true);
                            }, randomize(SuperKnock_minDelay.get(), SuperKnock_maxDelay.get()) * randomize(SuperKnock_minDelayMulitplier.get(), SuperKnock_maxDelayMulitplier.get()));
                        } else {
                            if (!needSprint) {
                                if (!mc.thePlayer.isSprinting())
                                    mc.thePlayer.setSprinting(true);
                            }

                            if (mc.gameSettings.keyBindForward.pressed)
                                mc.gameSettings.keyBindForward.pressed = false;

                            setTimeout(function () {
                                mc.gameSettings.keyBindForward.pressed = Keyboard.isKeyDown(mc.gameSettings.keyBindForward.getKeyCode());
                            }, randomize(SuperKnock_minDelay.get(), SuperKnock_maxDelay.get()));

                            if (!needSprint) setTimeout(function () {
                                if (mc.thePlayer.isSprinting())
                                    mc.thePlayer.setSprinting(false);
                            }, randomize(SuperKnock_minDelay.get(), SuperKnock_maxDelay.get()) * randomize(SuperKnock_minDelayMulitplier.get(), SuperKnock_maxDelayMulitplier.get()))
                        }
                        break;

                    case "SuperPacket":
                        if (!mc.thePlayer.isSprinting())
                            mc.thePlayer.sendQueue.addToSendQueue(new C0BPacketEntityAction(mc.thePlayer, C0BPacketEntityAction.Action.START_SPRINTING));

                        mc.thePlayer.sendQueue.addToSendQueue(new C0BPacketEntityAction(mc.thePlayer, C0BPacketEntityAction.Action.STOP_SPRINTING));
                        mc.thePlayer.sendQueue.addToSendQueue(new C0BPacketEntityAction(mc.thePlayer, C0BPacketEntityAction.Action.START_SPRINTING));
                        if (!needSprint) {
                            mc.thePlayer.setSprinting(false);
                            setTimeout(function () {
                                mc.thePlayer.sendQueue.addToSendQueue(new C0BPacketEntityAction(mc.thePlayer, C0BPacketEntityAction.Action.STOP_SPRINTING));
                            }, 1)
                        }
                        break;

                }
            }
            knockTicks = knockTicks == 0 ? SuperKnock_ticksDelay.get() : knockTicks;
        }
    }
}

function onLoad() {

}

function onDisable() {
    moduleManager.getModule(moduleString).setState(false);
    moduleManager.unregisterModule(module);
}

function onEnable() {
    moduleManager.registerModule(module);
}