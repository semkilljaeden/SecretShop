using Akka.Actor;
using SteamKit2;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecretShop.Bot
{
    class BotActor : ReceiveActor
    {
        private SteamClient _client;
        private CallbackManager _callBackManager;
        private SteamUser _userHandler;
        private SteamFriends _friendsHandler;
        private SteamGameCoordinator _coordinatorHandler;
        private List<SteamID> _friends;


        public IEnumerable<SteamID> FriendsList
        {
            get
            {
                CreateFriendsListIfNecessary();
                return _friends;
            }
        }

        public BotActor()
        {
            _client = new SteamClient();
            _callBackManager = new CallbackManager(_client);
            _userHandler = _client.GetHandler<SteamUser>();
            _friendsHandler = _client.GetHandler<SteamFriends>();
            _coordinatorHandler = _client.GetHandler<SteamGameCoordinator>();
        }


        private void CreateFriendsListIfNecessary()
        {
            if (_friends != null)
                return;

            _friends = new List<SteamID>();
            for (int i = 0; i < _friendsHandler.GetFriendCount(); i++)
                _friends.Add(_friendsHandler.GetFriendByIndex(i));
        }
    }
}
