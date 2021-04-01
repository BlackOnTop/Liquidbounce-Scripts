var logs = '\n';

// minified libs (takes less space and works/should work faster than normal libs + not needed to import them), minified using https://javascript-minifier.com/
//string funcs
String.prototype.includes = function (t, e) { "use strict"; return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e) };
//gl funcs
var GL11 = Java.type("org.lwjgl.opengl.GL11"); function drawRect(L, G, l, g, _) { var e = (_ >> 24 & 255) / 255, a = (_ >> 16 & 255) / 255, E = (_ >> 8 & 255) / 255, r = (255 & _) / 255; GL11.glEnable(GL11.GL_BLEND), GL11.glDisable(GL11.GL_TEXTURE_2D), GL11.glBlendFunc(GL11.GL_SRC_ALPHA, GL11.GL_ONE_MINUS_SRC_ALPHA), GL11.glEnable(GL11.GL_LINE_SMOOTH), GL11.glPushMatrix(), GL11.glColor4f(a, E, r, e), GL11.glBegin(GL11.GL_TRIANGLE_FAN), GL11.glVertex2d(l, G), GL11.glVertex2d(L, G), GL11.glVertex2d(L, g), GL11.glVertex2d(l, g), GL11.glEnd(), GL11.glPopMatrix(), GL11.glEnable(GL11.GL_TEXTURE_2D), GL11.glDisable(GL11.GL_BLEND), GL11.glDisable(GL11.GL_LINE_SMOOTH), GL11.glColor4f(1, 1, 1, 1) } function drawCircle(L, G, l, g) { var _ = (g >> 24 & 255) / 255, e = (g >> 16 & 255) / 255, a = (g >> 8 & 255) / 255, E = (255 & g) / 255; GL11.glColor4f(e, a, E, _), GL11.glEnable(GL11.GL_BLEND), GL11.glDisable(GL11.GL_TEXTURE_2D), GL11.glBlendFunc(GL11.GL_SRC_ALPHA, GL11.GL_ONE_MINUS_SRC_ALPHA), GL11.glEnable(GL11.GL_LINE_SMOOTH), GL11.glPushMatrix(), GL11.glLineWidth(1), GL11.glBegin(GL11.GL_POLYGON); for (var r = 0; r <= 360; r++)GL11.glVertex2d(L + Math.sin(r * Math.PI / 180) * l, G + Math.cos(r * Math.PI / 180) * l); GL11.glEnd(), GL11.glPopMatrix(), GL11.glEnable(GL11.GL_TEXTURE_2D), GL11.glDisable(GL11.GL_BLEND), GL11.glDisable(GL11.GL_LINE_SMOOTH), GL11.glColor4f(1, 1, 1, 1) };
//http funcs
function httpGet(e) { var t = new java.net.URL(e).openConnection(); return t.requestMethod = "GET", asResponse(t) } function httpPost(e, t, n) { n = n || "application/json"; var a = new java.net.URL(e).openConnection(); return a.requestMethod = "POST", a.setRequestProperty("Content-Type", n), a.doOutput = !0, write(a.outputStream, t), asResponse(a) } function asResponse(e) { return { data: read(e.inputStream), statusCode: e.responseCode } } function write(e, t) { var n = new java.io.DataOutputStream(e); n.writeBytes(t), n.flush(), n.close() } function read(e) { for (var t, n = new java.io.BufferedReader(new java.io.InputStreamReader(e)), a = new java.lang.StringBuffer; null != (t = n.readLine());)a.append(t); return n.close(), a.toString() };
//mc utils
var globalScope = this, KeyBinding = Java.type("net.minecraft.client.settings.KeyBinding"), EnumFacing = Java.type("net.minecraft.util.EnumFacing"), Vec3 = Java.type("net.minecraft.util.Vec3"), minecraftUtils = function () { var e = {}, n = function (n) { var t; return !("string" != typeof n || !e.hasOwnProperty(n)) && (t = e[n][1], globalScope.hasOwnProperty(n) && globalScope[n] instanceof KeyBinding && globalScope[n].setKeyCode(0), e[n][0].setKeyCode(t), delete e[n], KeyBinding.resetKeyBindingArrayAndHash(), !0) }; return { hookKeyBind: function (t, o) { var i; if (!(t instanceof KeyBinding) || "string" != typeof o) return !1; globalScope.hasOwnProperty(o) && globalScope[o] instanceof KeyBinding || (globalScope[o] = new KeyBinding("key.hook_" + o, 0, "key.categories.misc")), e.hasOwnProperty(o) && n(o); for (var r = Object.keys(e), a = 0; a < r.length; a++)if (e[r[a]][0] == t) { n(r[a]); break } return 0 == (i = t.getKeyCode()) && (i = t.getKeyCodeDefault()), t.setKeyCode(0), globalScope[o].setKeyCode(i), e[o] = [t, i], KeyBinding.resetKeyBindingArrayAndHash(), !0 }, unhookKeyBind: n, unhookAllKeyBinds: function () { for (var t = Object.keys(e), o = 0; o < t.length; o++)n(t[o]); return !0 } } }(); function hookKeyBind(e, n) { return minecraftUtils.hookKeyBind(e, n) } function unhookKeyBind(e) { return minecraftUtils.unhookKeyBind(e) } function unhookAllKeyBinds() { return minecraftUtils.unhookAllKeyBinds() } function getCenterOfBlockSide(e, n) { var t = new Vec3(e).addVector(.5, .5, .5), o = new Vec3(n.getDirectionVec()); return t.addVector(.5 * o.xCoord, .5 * o.yCoord, .5 * o.zCoord) } function isBlockInReach(e, n) { var t = mc.playerController.getBlockReachDistance() + .25, o = e.getPositionEyes(1), i = getCenterOfBlockSide(n, getClosestBlockSide(o, n)); return o.distanceTo(i) <= t } function getClosestBlockSide(e, n) { var t, o, i, r, a, c = null; for (a in EnumFacing.values()) o = getCenterOfBlockSide(n, t = EnumFacing.values()[a]), i = e.distanceTo(o), (null == c || i < c) && (c = i, r = t); return r };
//timing funcs
var Timer = Java.type("java.util.Timer"); function setInterval(e, n) { var t = new Timer("setInterval", !0); return t.schedule(function () { e() }, n, n), t } function clearInterval(e) { e.cancel() } function setTimeout(e, n) { var t = new Timer("setTimeout", !0); return t.schedule(function () { e() }, n), t } function clearTimeout(e) { e.cancel() };
//system funcs
var StringSelection = Java.type("java.awt.datatransfer.StringSelection"), ScaledResolution = Java.type("net.minecraft.client.gui.ScaledResolution"), Toolkit = Java.type("java.awt.Toolkit"); function copyToClipboard(t) { var e = new StringSelection(t); Toolkit.getDefaultToolkit().getSystemClipboard().setContents(e, null) } function getScaledWidth() { return new ScaledResolution(mc).getScaledWidth() } function getScaledHeight() { return new ScaledResolution(mc).getScaledHeight() };
//math funcs
Math.trunc = function (t) { return (t = +t) - t % 1 || (isFinite(t) && 0 !== t ? t < 0 ? -0 : 0 : t) }, Math.toRadians = function (t) { return t * Math.PI / 180 }, Math.toDegrees = function (t) { return 180 * t / Math.PI };

function createBoolean(text, state) {
    State = state;
    if (state !== true && state !== false) {
        logs += ('\n\u00A78Error found when creating \u00A7eBOOLEAN \u00A78 problem happened with statement:' + text);
        State = false;
    }
    return value.createBoolean(text, State);
}

function createText(text, text2) {

    if (text == null || text == undefined) text = '';
    if (text2 == null || text2 == undefined) text2 = '';
    return value.createText(text, text2);
}

function createInteger(text, default_value, minimal_value, maximal_value) {
    if ((!isFinite(default_value) || !isFinite(minimal_value) || !isFinite(maximal_value))) logs += ('\n\u00A78Error found when creating \u00A7cINTEGER \u00A78 problem happened with integer:' + text);
    return value.createInteger(text, isFinite(default_value) ? default_value : 0, isFinite(minimal_value) ? minimal_value : 0, isFinite(maximal_value) ? maximal_value : 0);
}

function createFloat(text, default_value, minimal_value, maximal_value) {
    if ((!isFinite(default_value) || !isFinite(minimal_value) || !isFinite(maximal_value))) logs += ('\n\u00A78Error found when creating \u00A7dFLOAT \u00A78 problem happened with float:' + text);
    return value.createFloat(text, isFinite(default_value) ? default_value : 0, isFinite(minimal_value) ? minimal_value : 0, isFinite(maximal_value) ? maximal_value : 0);
}

function createList(text, array, default_value) {
    if (Array.isArray(array) && array.indexOf(default_value) <= -1) logs += ('\n\u00A78Error found when creating \u00A7dLIST \u00A78 problem happened with default_value:' + text);
    if (!Array.isArray(array)) logs += ('\n\u00A78Error found when creating \u00A7dLIST \u00A78 problem happened with array:' + text);
    return value.createList(text, Array.isArray(array) ? array : [''], Array.isArray(array) ? default_value : '');
}

function category(category) {
    if (~["combat", "movement", "player", "render", "exploit", "fun"].indexOf(category.toLowerCase())) return category;
    logs += ('\n\u00A78Error found in \u00A7dSCRIPT CATEGORY \u00A78 category given:\u00A7c ' + category + ' \u00A78replaced with \u00A7a Fun');
    return 'Fun';
}

function description(description) {
    if (description == undefined || description == null) return '';
    return description;
}

function tag(tag) {
    if (tag == undefined || tag == null) {
        logs += ('\n\u00A78Error found in \u00A7dSCRIPT TAG \u00A78 tag given:\u00A7c ' + tag.toString() + ' \u00A78replaced with \u00A7a');
        return '';
    }
    return tag;
}

function name(name) {
    if (name == undefined || name == null || name == '') {
        logs += ('\n\u00A78Error found in \u00A7dSCRIPT NAME \u00A78 name given:\u00A7c ' + name.toString() + ' \u00A78replaced with \u00A7aturtlBaseScript');
        return 'turtlBaseScript';
    }
    return name;
}

function isInputUpOrDown() {
    return mc.gameSettings.keyBindJump.pressed && mc.gameSettings.keyBindSneak.pressed ? false : mc.gameSettings.keyBindJump.pressed ? 1 : mc.gameSettings.keyBindSneak.pressed ? -1 : 0;
}

function isInputMoving() {
    return mc.gameSettings.keyBindLeft.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindBack.pressed;
}

function isMoving() {
    return mc.thePlayer.movementInput.moveForward || mc.thePlayer.movementInput.moveStrafe;
}

function getSpeed(entity) {
    if (entity == null || entity == undefined) entity = mc.thePlayer;
    return Math.sqrt(entity.motionX * entity.motionX + entity.motionZ * entity.motionZ);
}

function isHolding(item_instance, entity) {
    if (entity == null || entity == undefined) entity = mc.thePlayer;
    if (entity) return entity.inventory.getCurrentItem() ? entity.inventory.getCurrentItem().getItem() instanceof item : false;
    return mc.thePlayer.inventory.getStackInSlot(slot) != null && mc.thePlayer.inventory.getStackInSlot(slot).getItem() instanceof item;
}

function getMoveYaw() {
    var moveYaw = mc.thePlayer.rotationYaw;
    if (mc.thePlayer.moveForward != 0 && mc.thePlayer.moveStrafing == 0) {
        moveYaw += mc.thePlayer.moveForward > 0 ? 0 : 180;
    } else if (mc.thePlayer.moveForward != 0 && mc.thePlayer.moveStrafing != 0) {
        if (mc.thePlayer.moveForward > 0)
            moveYaw += mc.thePlayer.moveStrafing > 0 ? -45 : 45;
        else
            moveYaw -= mc.thePlayer.moveStrafing > 0 ? -45 : 45;

        moveYaw += mc.thePlayer.moveForward > 0 ? 0 : 180;
    } else if (mc.thePlayer.moveStrafing != 0 && mc.thePlayer.moveForward == 0) {
        moveYaw += mc.thePlayer.moveStrafing > 0 ? -90 : 90;
    }
    return moveYaw;
}

function setSpeed(speed, strafe) {
    if (!isMoving()) return;
    if (mc.thePlayer.onGround || (strafe && !mc.thePlayer.onGround)) {
        var yaw = getMoveYaw();
        mc.thePlayer.motionX = -Math.sin(Math.toRadians(yaw)) * speed;
        mc.thePlayer.motionZ = Math.cos(Math.toRadians(yaw)) * speed;
    }
}

function isMovingHorizontally(entity) {
    if (entity == null || entity == undefined) entity = mc.thePlayer;
    return entity.posX - entity.lastTickPosX + entity.posZ - entity.lastTickPosZ != 0;
}

function isMovingVertically(entity) {
    if (entity == null || entity == undefined) entity = mc.thePlayer;
    return entity.posY - entity.lastTickPosY != 0;
}