interface Person {
    action_in_day: boolean
    action_in_night: boolean
    in_night(game: Game)
    in_day(game: Game)
    say()
}

class Game {
    ticket(): Person | null {
        console.log("ticketing... 1 lose!")
        return null
    }
    report_death() {
        console.log("People died!")
    }
    end(): boolean {
        this.rounds += 1
        if (this.rounds < 10) {
            return false
        } else {
            return true
        }
    }
    isNight: boolean
    persons: Person[]
    rounds: number
}

function main() {
    var game = new Game()
    game.isNight = true
    while (!game.end()) {
        for (var person of game.persons) {
            if (person.action_in_night) {
                person.in_night(game)
            }
        }
        game.isNight = false
        game.report_death()
        for (var person of game.persons) {
            if (person.action_in_day) {
                person.in_day(game)
            }
            person.say()
        }
        game.ticket()?.say()
    }


}
