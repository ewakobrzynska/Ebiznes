import io.ktor.application.*
import io.ktor.features.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.routing.*


fun main() {
    embeddedServer(Netty, port = 8080) {
        install(ContentNegotiation) {

        }

        routing {
            post("/discord") {
                val message = call.receive<String>()
                println("Nowa wiadomość na Discordzie: $message")
                call.respond("Wiadomość odebrana")
            }

            get("/categories") {
                val categories = listOf("Category 1", "Category 2", "Category 3")
                call.respond(categories)
            }
        }
    }.start(wait = true)
}
