package com.example

import net.dv8tion.jda.api.JDABuilder
import net.dv8tion.jda.api.entities.Activity
import net.dv8tion.jda.api.events.message.MessageReceivedEvent
import net.dv8tion.jda.api.hooks.ListenerAdapter
import javax.security.auth.login.LoginException

class DiscordBot : ListenerAdapter() {
    init {
        val token = System.getenv("DISCORD_TOKEN") ?: throw IllegalStateException("Missing DISCORD_TOKEN environment variable")
        try {
            val jda = JDABuilder.createDefault(token)
                .setActivity(Activity.playing("Ktor Bot"))
                .addEventListeners(this)
                .build()
            jda.awaitReady()
        } catch (e: LoginException) {
            e.printStackTrace()
        } catch (e: InterruptedException) {
            e.printStackTrace()
        }
    }

    override fun onMessageReceived(event: MessageReceivedEvent) {
        super.onMessageReceived(event)
        if (event.author.isBot) return

        val message = event.message.contentRaw
        val channel = event.channel

        // Przekaż wiadomość do serwisu analizującego tekst
        val response = analyzeMessage(message)

        // Wyślij odpowiedź do kanału
        channel.sendMessage(response).queue()
    }

    private fun analyzeMessage(message: String): String {
        return "Received: $message"
    }
}
