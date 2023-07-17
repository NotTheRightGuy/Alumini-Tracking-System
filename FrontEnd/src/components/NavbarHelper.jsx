import { Button } from "@chakra-ui/react";
function NavbarHelper({ name }) {
    if (name == "profile") {
        return (
            <section className="navbar-helper h-16 flex items-center justify-around">
                <div className="font-bebas text-3xl">ALUMNET</div>
                <div className="flex gap-6">
                    <button
                        className="font-bebas hover:underline hover:scale-105 transition-all underline"
                        onClick={() => {
                            window.location.href = "dashboard";
                        }}
                    >
                        Profile
                    </button>
                    <button
                        className="font-bebas hover:underline hover:scale-105 transition-all"
                        onClick={() => {
                            window.location.href = "/search";
                        }}
                    >
                        Search
                    </button>
                    <button className="font-bebas hover:underline hover:scale-105 transition-all">
                        Events
                    </button>
                    <button className="font-bebas hover:underline hover:scale-105 transition-all">
                        Notice
                    </button>
                </div>
                <div>
                    <Button
                        className="font-bebas "
                        colorScheme="red"
                        variant="outline"
                    >
                        Logout
                    </Button>
                </div>
            </section>
        );
    }
    if (name == "search") {
        return (
            <section className="navbar-helper h-16 flex items-center justify-around">
                <div className="font-bebas text-3xl">ALUMNET</div>
                <div className="flex gap-6">
                    <button
                        className="font-bebas hover:underline hover:scale-105 transition-all"
                        onClick={() => {
                            window.location.href = "dashboard";
                        }}
                    >
                        Profile
                    </button>
                    <button
                        className="font-bebas hover:underline hover:scale-105 transition-all underline"
                        onClick={() => {
                            window.location.href = "/search";
                        }}
                    >
                        Search
                    </button>
                    <button className="font-bebas hover:underline hover:scale-105 transition-all">
                        Events
                    </button>
                    <button className="font-bebas hover:underline hover:scale-105 transition-all">
                        Notice
                    </button>
                </div>
                <div>
                    <Button
                        className="font-bebas "
                        colorScheme="red"
                        variant="outline"
                    >
                        Logout
                    </Button>
                </div>
            </section>
        );
    }
    if (name == "events") {
        return (
            <section className="navbar-helper h-16 flex items-center justify-around">
                <div className="font-bebas text-3xl">ALUMNET</div>
                <div className="flex gap-6">
                    <button
                        className="font-bebas hover:underline hover:scale-105 transition-all"
                        onClick={() => {
                            window.location.href = "dashboard";
                        }}
                    >
                        Profile
                    </button>
                    <button
                        className="font-bebas hover:underline hover:scale-105 transition-all"
                        onClick={() => {
                            window.location.href = "/search";
                        }}
                    >
                        Search
                    </button>
                    <button className="font-bebas hover:underline hover:scale-105 transition-all underline">
                        Events
                    </button>
                    <button className="font-bebas hover:underline hover:scale-105 transition-all">
                        Notice
                    </button>
                </div>
                <div>
                    <Button
                        className="font-bebas "
                        colorScheme="red"
                        variant="outline"
                    >
                        Logout
                    </Button>
                </div>
            </section>
        );
    }
    if (name == "notice") {
        return (
            <section className="navbar-helper h-16 flex items-center justify-around">
                <div className="font-bebas text-3xl">ALUMNET</div>
                <div className="flex gap-6">
                    <button
                        className="font-bebas hover:underline hover:scale-105 transition-all"
                        onClick={() => {
                            window.location.href = "dashboard";
                        }}
                    >
                        Profile
                    </button>
                    <button
                        className="font-bebas hover:underline hover:scale-105 transition-all"
                        onClick={() => {
                            window.location.href = "/search";
                        }}
                    >
                        Search
                    </button>
                    <button className="font-bebas hover:underline hover:scale-105 transition-all">
                        Events
                    </button>
                    <button className="font-bebas hover:underline hover:scale-105 transition-all underline">
                        Notice
                    </button>
                </div>
                <div>
                    <Button
                        className="font-bebas "
                        colorScheme="red"
                        variant="outline"
                    >
                        Logout
                    </Button>
                </div>
            </section>
        );
    }
}

export default NavbarHelper;
