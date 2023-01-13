const { fontFamily } = require('tailwindcss/defaultTheme');
const typography = require('@tailwindcss/typography');

module.exports = {
  content: ['./src/**/*.js', './src/styles/*.scss'],
  theme: {
    fontFamily: {
      mono: ['DM Mono', fontFamily.mono],
    },
    extend: {
      colors: {
        'twitter-blue': '#1da1f2',
        muted: 'var(--color-muted)',
        'muted-hover': 'var(--color-muted-hover)',
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        secondary: 'var(--color-secondary)',
        'secondary-hover': 'var(--color-secondary-hover)',
        info: 'var(--color-info)',
        'info-hover': 'var(--color-info-hover)',
        success: 'var(--color-success)',
        'success-hover': 'var(--color-success-hover)',
        'success-background': 'var(--color-success-background)',
        warning: 'var(--color-warning)',
        'warning-hover': 'var(--color-warning-hover)',
        'warning-background': 'var(--color-warning-background)',
        danger: 'var(--color-danger)',
        'danger-hover': 'var(--color-danger-hover)',
        'danger-background': 'var(--color-danger-background)',
        background: 'var(--color-background)',
        'background-a': 'var(--color-background-a)',
        'background-b': 'var(--color-background-b)',
        'background-c': 'var(--color-background-c)',
        'background-d': 'var(--color-background-d)',
        heading: 'var(--color-heading)',
        'heading-muted': 'var(--color-heading-muted)',
        body: 'var(--color-body)',
        'body-muted': 'var(--color-body-muted)',

        link: 'var(--color-link)',
        'link-hover': 'var(--color-link-hover)',
      },
      width: {
        'max-content': 'max-content',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontWeight: theme('fontWeight.normal'),
              marginTop: '1.5em',
              marginBottom: '0.5em',
              color: 'var(--color-heading)',
            },
            h2: {
              fontWeight: theme('fontWeight.normal'),
              marginTop: '1.2em',
              marginBottom: '0.5em',
              color: 'var(--color-heading)',
            },
            h3: {
              fontWeight: theme('fontWeight.normal'),
              marginTop: '1em',
              marginBottom: '0.5em',
              color: 'var(--color-secondary)',
            },
            a: {
              color: 'var(--color-link)',
              '&:hover': {
                color: 'var(--color-link-hover)',
              },
            },
            img: {
              margin: '0 auto',
              boxShadow: theme('boxShadow.md'),
              borderRadius: theme('borderRadius.DEFAULT'),
            },
            video: {
              margin: '0 auto',
              boxShadow: theme('boxShadow.md'),
              borderRadius: theme('borderRadius.DEFAULT'),
            },
            pre: {
              fontFamily: '"DM Mono", monospace',
            },
            code: {
              backgroundColor: theme('colors.purple.100'),
              color: theme('colors.purple.900'),
              fontFamily: '"DM Mono", monospace',
              fontWeight: theme('fontWeight.normal'),
              paddingLeft: theme('padding.2'),
              paddingRight: theme('padding.2'),
            },
            p: {
              color: 'var(--color-body)',
            },
            ul: {
              color: 'var(--color-secondary)',
            },
            ol: {
              color: 'var(--color-secondary)',
            },
            strong: {
              color: 'var(--color-heading)',
            },
          },
        },
        lg: {
          css: {
            h1: {
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            h2: {
              marginTop: '1.2em',
              marginBottom: '0.5em',
            },
            h3: {
              marginTop: '1em',
              marginBottom: '0.5em',
            },
            img: {
              margin: '0 auto',
            },
          },
        },
        xl: {
          css: {
            h1: {
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            h2: {
              marginTop: '1.2em',
              marginBottom: '0.5em',
            },
            h3: {
              marginTop: '1em',
              marginBottom: '0.5em',
            },
            img: {
              margin: '0 auto',
            },
          },
        },
      }),
    },
    minWidth: {
      '1/3': '33%',
    },
  },
  plugins: [
    typography({
      modifiers: ['lg', 'xl'],
    }),
  ],
};
