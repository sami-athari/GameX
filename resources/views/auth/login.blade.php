
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>GameX - Login</title>

    <!-- Fonts & Icons -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600,800&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'gaming-dark': '#2d3748',
                        'gaming-darker': '#1a202c',
                        'gaming-red-600': '#dc2626', // Corrected to true red (Tailwind red-600)
                        'gaming-blue': '#4299e1',
                        'gaming-card': '#4a5568',
                    },
                    fontFamily: { sans: ['Figtree', 'sans-serif'] },
                }
            }
        }
    </script>

    <!-- Custom CSS -->
    <style>
        .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
            transform: translateY(-4px);
            box-shadow: 0 4px 20px rgba(220, 38, 38, 0.3); /* Adjusted shadow to match red-600 */
        }
        /* Ensure navbar and content don’t overlap */
        body {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }
        .main-content {
            flex: 1;
            padding-top: 80px; /* Adjust based on navbar height */
        }
    </style>
</head>
<body class="bg-gaming-darker text-white font-sans">
    @include('user.navbar')

    <div class="main-content container mx-auto px-4 py-16 flex items-center justify-center">
        <div class="w-full max-w-md">
            <div class="bg-gaming-card rounded-2xl shadow-2xl overflow-hidden relative">
                <!-- Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>

                <!-- Header -->
                <div class="px-6 py-4 border-b border-gray-700 relative z-10">
                    <h2 class="text-2xl md:text-3xl font-extrabold text-center">
                        Login to Game<span class="text-gaming-red-600">X</span>
                    </h2>
                </div>

                <!-- Body -->
                <div class="p-6 relative z-10">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <!-- Email -->
                        <div class="mb-6">
                            <label for="email" class="block text-gray-300 text-sm font-medium mb-2">
                                {{ __('Email Address') }}
                            </label>
                            <input id="email" type="email"
                                   class="bg-gaming-dark text-white w-full rounded-lg border border-gray-600 focus:border-gaming-red-600 focus:ring focus:ring-gaming-red-600 focus:ring-opacity-50 px-4 py-3 @error('email') border-gaming-red-600 @enderror"
                                   name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                            @error('email')
                                <span class="text-gaming-red-600 text-sm mt-1">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>

                        <!-- Password -->
                        <div class="mb-6">
                            <label for="password" class="block text-gray-300 text-sm font-medium mb-2">
                                {{ __('Password') }}
                            </label>
                            <input id="password" type="password"
                                   class="bg-gaming-dark text-white w-full rounded-lg border border-gray-600 focus:border-gaming-red-600 focus:ring focus:ring-gaming-red-600 focus:ring-opacity-50 px-4 py-3 @error('password') border-gaming-red-600 @enderror"
                                   name="password" required autocomplete="current-password">
                            @error('password')
                                <span class="text-gaming-red-600 text-sm mt-1">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>

                        <!-- Remember Me -->
                        <div class="mb-6">
                            <div class="flex items-center">
                                <input class="mr-2 rounded border-gray-600 bg-gaming-dark text-gaming-red-600 focus:ring-gaming-red-600"
                                       type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                                <label class="text-gray-300 text-sm" for="remember">
                                    {{ __('Remember Me') }}
                                </label>
                            </div>
                        </div>

                        <!-- Submit -->
                        <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                            <button type="submit"
                                    class="bg-gaming-red-600 hover:bg-gaming-red-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 mb-4 md:mb-0 hover-lift w-full md:w-auto">
                                {{ __('Login') }}
                            </button>

                            @if (Route::has('password.request'))
                                <a class="text-gaming-red-600 hover:text-white text-sm font-medium"
                                   href="{{ route('password.request') }}">
                                    {{ __('Forgot Your Password?') }}
                                </a>
                            @endif
                        </div>
                    </form>
                </div>

                <!-- Sign up Link -->
                <div class="bg-gaming-dark px-6 py-4 border-t border-gray-700 flex justify-center relative z-10">
                    <p class="text-gray-300 text-sm">
                        {{ __("Don't have an account?") }}
                        <a href="{{ route('register') }}" class="text-gaming-red-600 hover:text-white font-medium">
                            {{ __('Sign up now') }}
                        </a>
                    </p>
                </div>
            </div>

            <!-- Gaming Elements -->
            <div class="mt-8 flex justify-center">
                <div class="flex space-x-6 text-gray-400">
                    <div class="flex items-center">
                        <i class="fas fa-shield-alt mr-2 text-gaming-red-600 text-lg"></i>
                        <span class="text-sm">{{ __('Secure Login') }}</span>
                    </div>
                    <div class="flex items-center">
                        <i class="fas fa-gamepad mr-2 text-gaming-red-600 text-lg"></i>
                        <span class="text-sm">{{ __('Game Access') }}</span>
                    </div>
                    <div class="flex items-center">
                        <i class="fas fa-headset mr-2 text-gaming-red-600 text-lg"></i>
                        <span class="text-sm">{{ __('24/7 Support') }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>


</body>
</html>
