import { isAuthenticated } from "../services/authService.js";

export function CommunityPage() {
    if (!isAuthenticated()) return `
        <main class="community-auth-wall"><section><span class="community-kicker">EDUCONNECT COMMUNITY</span><h1>Your Community. Your Connections.</h1>
            <p>Sign in with your student account to discover peers and message your friends.</p>
            <a class="community-button community-button-primary" href="/community" data-auth-required="true">Sign in to continue →</a>
        </section></main>`;

    return `
    <main id="community-page" class="community-page">
        <section class="community-hero" aria-labelledby="community-title">
            <div class="community-hero-copy"><span class="community-kicker">EDUCONNECT · STUDENT NETWORK</span>
                <h1 id="community-title">Your Community.<br><span>Your Connections.</span></h1>
                <p>Meet students, exchange ideas, find study partners, and build meaningful connections.</p>
                <div class="community-hero-actions"><button class="community-button community-button-primary" data-community-tab-link="discover">Explore students <span>→</span></button>
                    <button class="community-button community-button-glass" data-community-tab-link="messages">My messages <span>↗</span></button></div>
                <div class="community-hero-stats" aria-live="polite">
                    <div><strong data-stat="friends">—</strong><span>Your connections</span></div>
                    <div><strong data-stat="requests">—</strong><span>New requests</span></div>
                    <div><strong data-stat="unread">—</strong><span>Unread messages</span></div>
                </div>
            </div>
            <div class="community-network-art" aria-hidden="true">
                <div class="community-orbit community-orbit-one"></div><div class="community-orbit community-orbit-two"></div>
                <svg class="community-network-lines" viewBox="0 0 460 360"><path d="M82 205 180 103 288 143 374 66M82 205l118 97 88-159 94 130M180 103l20 199 174-131"/></svg>
                <span class="community-node community-node-main">EC</span><span class="community-node community-node-a">✦</span><span class="community-node community-node-b">↗</span><span class="community-node community-node-c">◎</span>
                <div class="community-float-card"><span class="community-float-icon">✦</span><span><b>Find your people</b><small>Study goals bring us together</small></span></div>
            </div>
        </section>

        <div class="community-dashboard">
            <aside class="community-sidebar">
                <div class="community-side-profile"><span class="community-avatar community-avatar-large" data-my-avatar>EC</span><div><strong data-my-name>Student</strong><small data-my-course>Complete your profile</small></div><span class="community-presence-dot" aria-label="Signed in"></span></div>
                <nav class="community-tabs" aria-label="Community sections">
                    <button class="is-active" data-community-tab="discover"><span>✦</span> Discover students</button>
                    <button data-community-tab="friends"><span>◉</span> My friends <b data-tab-count="friends">0</b></button>
                    <button data-community-tab="requests"><span>↗</span> Friend requests <b data-tab-count="requests">0</b></button>
                    <button data-community-tab="messages"><span>▤</span> Messages <b data-tab-count="messages">0</b></button>
                    <button data-community-tab="notifications"><span>♧</span> Notifications <b data-tab-count="notifications">0</b></button>
                    <button data-community-tab="profile"><span>⚙</span> My profile</button>
                </nav>
                <div class="community-sidebar-note"><span>🔒</span><p>Your email and phone are never shown in student discovery.</p></div>
            </aside>

            <div class="community-content">
                <section class="community-panel is-active" data-panel="discover" aria-labelledby="discover-title">
                    <div class="community-section-heading"><div><span class="community-kicker">BUILD YOUR CIRCLE</span><h2 id="discover-title">Discover students</h2><p>Search by name, course, university, country, or shared interests.</p></div><span class="community-panel-count" data-discovery-count></span></div>
                    <form class="community-search-form"><label class="community-search-main"><span aria-hidden="true">⌕</span><input name="q" type="search" placeholder="Search students by name or username" aria-label="Search students by name or username"></label>
                        <input name="university" placeholder="University" aria-label="Filter by university"><input name="country" placeholder="Country" aria-label="Filter by country"><input name="course" placeholder="Course" aria-label="Filter by course">
                        <input name="interest" placeholder="Interest" aria-label="Filter by interest"><select name="sort" aria-label="Sort students"><option value="newest">Newest members</option><option value="shared">Shared interests</option></select>
                        <button class="community-button community-button-primary" type="submit">Search <span>→</span></button>
                    </form>
                    <div class="community-card-grid" data-student-results aria-live="polite"><div class="community-skeleton"></div><div class="community-skeleton"></div><div class="community-skeleton"></div></div>
                    <div class="community-pagination"><button data-page-prev disabled>← Previous</button><span data-page-label>Page 1</span><button data-page-next>Next →</button></div>
                </section>

                <section class="community-panel" data-panel="friends" aria-labelledby="friends-title" hidden>
                    <div class="community-section-heading"><div><span class="community-kicker">YOUR STUDY NETWORK</span><h2 id="friends-title">My friends</h2><p>Start a private, one-to-one conversation with a connection.</p></div></div>
                    <div class="community-card-grid" data-friends-results></div>
                </section>

                <section class="community-panel" data-panel="requests" aria-labelledby="requests-title" hidden>
                    <div class="community-section-heading"><div><span class="community-kicker">CONNECTIONS</span><h2 id="requests-title">Friend requests</h2><p>Choose who you’d like to connect with.</p></div></div>
                    <div class="community-request-columns"><div><h3>Incoming</h3><div data-incoming-requests></div></div><div><h3>Sent</h3><div data-outgoing-requests></div></div></div>
                </section>

                <section class="community-panel" data-panel="messages" aria-labelledby="messages-title" hidden>
                    <div class="community-section-heading"><div><span class="community-kicker">PRIVATE CONVERSATIONS</span><h2 id="messages-title">Messages</h2><p>Private chats are available after a friend request is accepted.</p></div><span class="community-live-pill"><i></i> Updates automatically</span></div>
                    <div class="community-chat-shell"><aside class="community-conversation-list"><label class="community-conversation-search">⌕ <input data-conversation-search type="search" placeholder="Search conversations" aria-label="Search conversations"></label><div data-conversation-list></div></aside>
                        <section class="community-chat-window" data-chat-window aria-label="Conversation"><div class="community-chat-empty"><span>✉</span><h3>Your conversations start here</h3><p>Choose a friend to open a private chat.</p><button class="community-button community-button-glass" data-community-tab-link="friends">View my friends →</button></div></section>
                    </div>
                </section>

                <section class="community-panel" data-panel="notifications" aria-labelledby="notifications-title" hidden>
                    <div class="community-section-heading"><div><span class="community-kicker">STAY IN THE LOOP</span><h2 id="notifications-title">Notifications</h2><p>Friend requests, accepted connections, and new messages.</p></div><button class="community-text-button" data-mark-all-read>Mark all read</button></div>
                    <div class="community-notification-list" data-notifications></div>
                </section>

                <section class="community-panel" data-panel="profile" aria-labelledby="profile-title" hidden>
                    <div class="community-section-heading"><div><span class="community-kicker">YOUR SPACE</span><h2 id="profile-title">Your student profile</h2><p>Share only the details you want other students to see.</p></div></div>
                    <form class="community-profile-form" data-profile-form>
                        <label>Display name<input data-profile-name type="text" readonly></label><label>Username<input name="username" minlength="3" maxlength="40" pattern="[a-zA-Z0-9_]{3,40}" required></label>
                        <label class="community-field-wide">Short bio<textarea name="bio" maxlength="500" rows="3" placeholder="What are you studying or working toward?"></textarea></label>
                        <label>University<input name="university" maxlength="160" placeholder="Your university"></label><label>Course / field<input name="course" maxlength="160" placeholder="e.g. Computer Science"></label>
                        <label>Country or region<input name="country" maxlength="100" placeholder="Your region"></label><label>Interests<input name="interests" maxlength="500" placeholder="AI, design, research"></label>
                        <label class="community-toggle"><input name="discoverable" type="checkbox"><span><b>Show my profile in student discovery</b><small>Off until you choose to enable it.</small></span></label>
                        <label class="community-toggle"><input name="showOnline" type="checkbox"><span><b>Share my online status</b><small>Your status expires after you leave.</small></span></label>
                        <button class="community-button community-button-primary" type="submit">Save profile <span>→</span></button><p class="community-form-feedback" role="status" aria-live="polite"></p>
                    </form>
                </section>
                <div class="community-toast" data-community-toast role="status" aria-live="polite"></div>
            </div>
        </div>
        <dialog class="community-profile-dialog" data-profile-dialog aria-labelledby="community-profile-dialog-title"><button class="community-dialog-close" data-profile-close aria-label="Close profile">×</button><div data-profile-detail></div></dialog>
    </main>`;
}

export default CommunityPage;
